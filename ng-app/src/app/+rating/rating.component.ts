import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {RatingService} from './services/rating.service';
import {MatTableDataSource} from '@angular/material/table';
import {map} from "rxjs/operators";

@Component({
  selector: 'ak-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  public formGroup: FormGroup;
  public isLoadingFinished = false;
  public displayedColumns: string[] = ['name', 'faculty', 'chair', 'mark', 'btn'];
  public dataSource = new MatTableDataSource([]);

  constructor(
    private _formBuilder: FormBuilder,
    private _ratingService: RatingService,
  ) {
    this.formGroup = _formBuilder.group({
      search: new FormControl('', Validators.required)
    });
  }

  public search(): void {
    this._ratingService.searchRating(this.formGroup.value.search).subscribe((list) => {
      this.dataSource = new MatTableDataSource(list.docs
                                                   .map((doc) => ({ ...doc.data(), id: doc.id }))
                                                   .filter((abiturient) => !!abiturient.total_mark));
      this.isLoadingFinished = true;
    });
  }
}
