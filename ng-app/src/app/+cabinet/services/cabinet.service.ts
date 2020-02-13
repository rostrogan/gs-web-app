import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { forkJoin, from, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from '../../core/auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CabinetService {
  constructor(
    private _afs: AngularFirestore,
    private _authService: AuthService,
    private _httpClient: HttpClient,
  ) {
  }

  public getUser(): Observable<any> {
    return from(
      this._afs.collection<any>('users-info')
          .doc(this._authService.getUserId())
          .get()
          .pipe(map((user: any) => {
            return {
              ...user.data(),
              id: user.id,
            };
          })));
  }

  public getRegistrationData(): Observable<any> {
    return from(this._afs.collection<any>('registration-data').snapshotChanges().pipe(map((abiturients: any) => {
      return abiturients.map((abiturient: any) => {
        return {
          ...abiturient.payload.doc.data(),
          id: abiturient.payload.doc.id,
        };
      });
    })));
  }

  public getRegistrationCard(id: string): Observable<any> {
    return from(this._afs.collection('registration-data').doc(id).get());
  }

  public approveRegistration(id: string, abiturient: any): Observable<any> {
    return from(Promise.all([
      this._afs.collection('abiturients').doc(id).set(abiturient),
      this._afs.collection('registration-data').doc(id).delete(),
    ]));
  }

  public declineRegistration(id: string): Observable<any> {
    return from(this._afs.collection('registration-data').doc(id).delete());
  }

  public getAbiturients(): Observable<any> {
    return from(this._afs.collection<any>('abiturients').snapshotChanges().pipe(map((abiturients: any) => {
      return abiturients.map((abiturient: any) => {
        return {
          ...abiturient.payload.doc.data(),
          id: abiturient.payload.doc.id,
        };
      });
    })));
  }

  public getAbiturient(id: string): Observable<any> {
    return from(this._afs.collection('abiturients').doc(id).get());
  }

  public updateAbiturient(id: string, abiturient: any): Observable<any> {
    return from(this._afs.collection('abiturients').doc(id).set(abiturient));
  }

  public approveAbiturient(id: string, abiturient: any): Observable<any> {
    return from(Promise.all([
      this._afs.collection('aspirants').doc(id).set(abiturient),
      this._afs.collection('abiturients').doc(id).delete(),
    ]));
  }

  public deleteAbiturient(id: string): Observable<any> {
    return from(this._afs.collection('abiturients').doc(id).delete());
  }

  public getAspirants(): Observable<any> {
    return from(this._afs.collection<any>('aspirants').snapshotChanges().pipe(map((aspirants: any) => {
      return aspirants.map((aspirant: any) => {
        return {
          ...aspirant.payload.doc.data(),
          id: aspirant.payload.doc.id,
        };
      });
    })));
  }

  public getAspirantUser(): Observable<any> {
    return this.getUser()
               .pipe(
                 switchMap((user) => {
                   return from(
                     this._afs.collection<any>('aspirants')
                         .doc(user.entity_id)
                         .get());
                 }),
                 map((user: any) => {
                   return {
                     ...user.data(),
                     id: user.id,
                   };
                 })
               );
  }

  public getAspirantsByGroup(id: string): Observable<any> {
    return from(
      this._afs.collection<any>('aspirants', ref => ref.where('group_id', '==', id))
          .get()
          .pipe(map((users: any) => {
            return users.docs.map((user) => {
              return {
                ...user.data(),
                id: user.id,
              };
            });
          }))
    );
  }

  public getTeacherUser(): Observable<any> {
    return from(
      this._afs.collection<any>('teachers')
          .doc(this._authService.getUserId())
          .get()
          .pipe(map((user: any) => {
            return {
              ...user.data(),
              id: user.id,
            };
          }))
    );
  }

  public getGroupInfo(groupId: string): Observable<any> {
    return from(
      this._afs.collection<any>('groups')
          .doc(groupId)
          .get()
          .pipe(map((group: any) => {
            return {
              ...group.data(),
              id: group.id,
            };
          }))
    );
  }

  public getFaculty(facultyId: string): Observable<any> {
    return from(
      this._afs.collection<any>('faculties')
          .doc(facultyId)
          .get()
          .pipe(map((faculty: any) => {
            return {
              ...faculty.data(),
              id: faculty.id,
            };
          }))
    );
  }

  public getDepartment(departmentAbbr: string): Observable<any> {
    return from(
      this._afs.collection<any>('departments', ref => ref.where('abbr', '==', departmentAbbr))
          .get()
          .pipe(map((departments: any) => {
            return {
              ...departments.docs[0].data(),
              id: departments.docs[0].id,
            };
          }))
    );
  }

  public getDepartmentById(id: string): Observable<any> {
    return from(
      this._afs.collection<any>('departments')
          .doc(id)
          .get()
          .pipe(map((department: any) => {
            return {
              ...department.data(),
              id: department.id,
            };
          }))
    );
  }

  public getGroups(): Observable<any> {
    return from(
      this._afs.collection<any>('groups')
          .get()
          .pipe(map((groups: any) => {
            return groups.docs.map((group) => {
              return {
                ...group.data(),
                id: group.id,
              };
            });
          }))
    );
  }

  public getGroupsByDepartment(departmentId: string): Observable<any> {
    return from(
      this._afs.collection<any>('groups', ref => ref.where('department', '==', departmentId))
          .get()
          .pipe(map((groups: any) => {
            return groups.docs.map((group) => {
              return {
                ...group.data(),
                id: group.id,
              };
            });
          }))
    );
  }

  public getLessons(): Observable<any> {
    return from(
      this._afs.collection('lessons')
          .get()
          .pipe(map((lessons: any) => {
            return lessons.docs.map((lesson) => {
              return {
                ...lesson.data(),
                id: lesson.id,
              };
            });
          }))
    );
  }

  public getLesson(id: string): Observable<any> {
    return from(
      this._afs.collection('lessons')
          .doc(id)
          .get()
          .pipe(map((lesson: any) => {
            return {
              ...lesson.data(),
              id: lesson.id,
            };
          }))
    );
  }

  public addGroupToAspirant(aspirantId: string, groupId: string, email: string, first_name: string, last_name: string): Observable<any> {
    return from(
      this._afs.collection('aspirants')
          .doc(aspirantId)
          .update({
            group_id: groupId,
          })
    ).pipe(
      switchMap(() => {
        return from(this._afs.collection('groups').doc(groupId).get());
      }),
      switchMap((group: any) => {
        const data = group.data();
        if (data.aspirants_list) {
          data.aspirants_list.push(aspirantId);
        } else {
          data.aspirants_list = [aspirantId];
        }
        return from(this._afs.collection('groups').doc(groupId).update(data));
      }),
      switchMap(() => {
        return this._httpClient
                   .post('https://us-central1-aspirantura-kpi.cloudfunctions.net/register', {
                     email,
                     pass: this.generatePass(),
                   });
      }),
      switchMap((res: any) => {
        return from(this._afs.collection('users-info').doc(res.uid).set({
          first_name,
          last_name,
          user_role: 2,
          entity_id: aspirantId,
        }));
      }),
      switchMap(() => {
        return this._authService.sendPasswordResetLink(email);
      })
    );
  }

  public addMarkToAspirantLesson(aspirantId: string, lessonsMarks: any): Observable<any> {
    return from(
      this._afs.collection('aspirants')
          .doc(aspirantId)
          .update({
            lessons_marks: lessonsMarks,
          })
    );
  }

  private generatePass(): string {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let pass = '';

    for (let i = 0; i < 32; i++) {
      pass += chars[Math.floor(Math.random() * chars.length)];
    }

    return pass;
  }
}
