import { Injectable } from '@angular/core';
import { forkJoin, from, Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AdminService {
  constructor(
    private _afs: AngularFirestore,
    private _httpClient: HttpClient,
  ) {
  }

  public getGroups(): Observable<any> {
    return from(
      this._afs.collection('groups')
          .snapshotChanges()
          .pipe(
            map((groups: any) => {
              return groups.map((group: any) => {
                return {
                  ...group.payload.doc.data(),
                  id: group.payload.doc.id,
                };
              });
            })
          ));
  }

  public getGroup(groupId: string): Observable<any> {
    return from(
      this._afs.collection('groups')
          .doc(groupId)
          .snapshotChanges()
          .pipe(
            map((group: any) => {
              return {
                ...group.payload.data(),
                id: group.payload.id,
              };
            })
          ));
  }

  public getFaculties(): Observable<any> {
    return from(
      this._afs.collection('faculties')
          .snapshotChanges()
          .pipe(
            map((faculties: any) => {
              return faculties.map((faculty: any) => {
                return {
                  ...faculty.payload.doc.data(),
                  id: faculty.payload.doc.id,
                };
              });
            })
          ));
  }

  public getFaculty(id: string): Observable<any> {
    return from(
      this._afs.collection('faculties')
          .doc(id)
          .snapshotChanges()
          .pipe(
            map((faculty: any) => {
              return {
                ...faculty.payload.data(),
                id: faculty.payload.id,
              };
            })
          ));
  }

  public getDepartments(): Observable<any> {
    return from(
      this._afs.collection('departments')
          .snapshotChanges()
          .pipe(
            map((departments: any) => {
              return departments.map((department: any) => {
                return {
                  ...department.payload.doc.data(),
                  id: department.payload.doc.id,
                };
              });
            })
          ));
  }

  public getDepartment(id: string): Observable<any> {
    return from(
      this._afs.collection('departments')
          .doc(id)
          .snapshotChanges()
          .pipe(
            map((department: any) => {
              return {
                ...department.payload.data(),
                id: department.payload.id,
              };
            })
          ));
  }

  public addGroup(groupName: string, departmentId: string, facultyId: string): Observable<any> {
    return from(this._afs.collection('groups').add({
      name: groupName,
      department: departmentId,
      faculty: facultyId,
    }));
  }

  public getTeachers(): Observable<any> {
    return from(
      this._afs.collection('teachers')
          .snapshotChanges()
          .pipe(
            map((teachers: any) => {
              return teachers.map((teacher: any) => {
                return {
                  ...teacher.payload.doc.data(),
                  id: teacher.payload.doc.id,
                };
              });
            })
          ));
  }

  public getTeacher(id: string): Observable<any> {
    return from(
      this._afs.collection('teachers')
          .doc(id)
          .snapshotChanges()
          .pipe(
            map((teacher: any) => {
              return {
                ...teacher.payload.data(),
                id: teacher.payload.id,
              };
            })
          ));
  }

  public addTeacher(teacherName: string, departmentId: string, facultyId: string, email: string, pass: string): Observable<any> {
    return this._httpClient
               .post('https://us-central1-aspirantura-kpi.cloudfunctions.net/register', {
                 email,
                 pass,
               })
               .pipe(
                 switchMap((res: any) => {
                   return forkJoin([
                     from(this._afs.collection('teachers').doc(res.uid).set({
                       name: teacherName,
                       department: departmentId,
                       faculty: facultyId,
                     })),
                     from(this._afs.collection('users-info').doc(res.uid).set({
                       first_name: teacherName,
                       last_name: '',
                       user_role: 3,
                     })),
                   ]);
                 }),
               );
  }

  public addLessonToGroup(group: any, teacherId: string, name: string, semester: string, creditCount: string): Observable<any> {
    return from(
      this._afs.collection('lessons')
          .add({
            credits_count: creditCount,
            group_id: group.id,
            name,
            semester,
            teacher_id: teacherId,
          })
    ).pipe(
      switchMap((lesson) => {
        if (group.lessons && group.lessons[semester]) {
          group.lessons[semester].push({
            name,
            teacher: teacherId,
            lesson_id: lesson.id,
          });
        } else {
          if (!group.lessons) {
            group.lessons = {};
          }
          group.lessons[semester] = [{
            name,
            teacher: teacherId,
            lesson_id: lesson.id,
          }];
        }
        return from(this._afs.collection('groups')
                        .doc(group.id)
                        .update({
                          lessons: group.lessons,
                        }));
      }),
      switchMap(() => {
        return from(this._afs.collection('teachers').doc(teacherId).get());
      }),
      switchMap((teacher) => {
        const teacherObject = teacher.data();
        if (teacherObject.lessons && teacherObject.lessons.length) {
          teacherObject.lessons.push({
            group_id: group.id,
            group_name: group.name,
            lesson_name: name,
            lesson_id: group.lessons[semester][group.lessons[semester].length - 1].lesson_id,
          });
        } else {
          teacherObject.lessons = [{
            group_id: group.id,
            group_name: group.name,
            lesson_name: name,
            lesson_id: group.lessons[semester][group.lessons[semester].length - 1].lesson_id,
          }];
        }
        return from(this._afs.collection('teachers').doc(teacherId).update({
          lessons: teacherObject.lessons,
        }));
      })
    );
  }
}
