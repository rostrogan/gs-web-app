import { Component, OnInit } from '@angular/core';
import { RatingService } from '../services/rating.service';
import { MatTableDataSource } from '@angular/material/table';
import { pluck, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'ak-rating-detail',
  templateUrl: './rating-detail.component.html',
  styleUrls: ['./rating-detail.component.scss']
})
export class RatingDetailComponent implements OnInit {
  public isLoadingFinished = false;
  public displayedColumns: string[] = ['position', 'name', 'faculty', 'speciality', 'training_form', 'mark'];
  public dataSource = new MatTableDataSource([]);
  public abiturient: any;
  public abiturients: any[];
  public speciality: any;
  public freePlaces: number = 0;
  public activeId: string;

  constructor(
    private _ratingService: RatingService,
    private _route: ActivatedRoute,
  ) {
  }

  public ngOnInit(): void {
    this._route.params
        .pipe(
          pluck('id'),
          switchMap((id: string) => {
            this.activeId = id;
            return this._ratingService.getAbiturient(id);
          }),
          switchMap((abiturient: any) => {
            this.abiturient = abiturient.data();
            return forkJoin([
              this._ratingService.getAbiturients(this.abiturient.speciality),
              this._ratingService.getSpeciality(this.abiturient.speciality),
            ]);
          })
        )
        .subscribe(([abiturients, speciality]) => {
          this.speciality = speciality.data();
          if (this.abiturient.training_form === 'Денна') {
            this.freePlaces = this.speciality.day_form;
          } else if (this.abiturient.training_form === 'Вечірня') {
            this.freePlaces = this.speciality.evening_form;
          } else {
            this.freePlaces = 0;
          }
          this.abiturients = abiturients.docs
                                        .map((doc) => ({...doc.data(), id: doc.id}))
                                        .filter(
                                          (abiturient) => !!abiturient.total_mark &&
                                            this.abiturient.training_form === abiturient.training_form)
                                        .sort((a, b) => b.total_mark - a.total_mark);
          this.dataSource = new MatTableDataSource(this.abiturients.map((abiturient, index) => ({...abiturient, position: index + 1})));
          this.isLoadingFinished = true;
        });
  }

}
