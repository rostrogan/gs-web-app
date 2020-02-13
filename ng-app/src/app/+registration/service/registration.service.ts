import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { from, Observable } from 'rxjs';

import { RegistrationData } from '../models/registration-data.model';

@Injectable()
export class RegistrationService {
  constructor(private _afs: AngularFirestore) {}

  public createStudent(registrationData: RegistrationData): Observable<any> {
    return from(this._afs.collection('registration-data').add(RegistrationData.toDatabaseData(registrationData)));
  }
}
