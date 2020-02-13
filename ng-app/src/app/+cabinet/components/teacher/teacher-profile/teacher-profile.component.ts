import { Component, OnInit } from '@angular/core';
import { CabinetService } from '../../../services/cabinet.service';
import { switchMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'ak-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.scss']
})
export class TeacherProfileComponent implements OnInit {
  public teacher: any;
  public faculty: any;
  public department: any;

  constructor(private _cabinetService: CabinetService) { }

  public ngOnInit(): void {
    this._cabinetService.getTeacherUser()
        .pipe(
          switchMap((teacher) => {
            this.teacher = teacher;
            return forkJoin([
              this._cabinetService.getFaculty(teacher.faculty),
              this._cabinetService.getDepartmentById(teacher.department),
            ]);
          })
        )
        .subscribe(([faculty, department]) => {
          this.faculty = faculty;
          this.department = department;
        });
  }

}
