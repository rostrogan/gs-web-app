import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable()
export class RatingService {
  constructor(private _afs: AngularFirestore) {}

  public searchRating(query: string): Observable<any> {
    return this._afs.collection(
      'abiturients',
      ref => ref.where('last_name', '==', query),
    ).get();
  }

  public getAbiturient(id: string): Observable<any> {
    return this._afs.collection('abiturients').doc(id).get();
  }

  public getAbiturients(speciality: string): Observable<any> {
    return this._afs.collection(
      'abiturients',
      ref => ref.where('speciality', '==', speciality),
    ).get();
  }

  public getSpeciality(id: string): Observable<any> {
    return this._afs.collection('specialities').doc(id).get();
  }
}
