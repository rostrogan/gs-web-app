import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, from, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { IUser } from './user-inteface';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  private _isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private userData: IUser;
  private userData$: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);
  private userId: string;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private _router: Router
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.setUserData(user.uid, user.email);
        this.userId = user.uid;
        this._isLoggedIn$.next(true);
        localStorage.setItem('user', JSON.stringify(user));
        JSON.parse(localStorage.getItem('user'));
      } else {
        this._isLoggedIn$.next(false);
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  public getUserId(): string {
    return this.userId;
  }

  public getUserData$(): Observable<IUser> {
    return this.userData$.asObservable();
  }

  public login(login: string, password: string): Observable<any> {
    return from(this.afAuth.auth.signInWithEmailAndPassword(login, password));
  }

  public logout(): void {
    this._isLoggedIn$.next(false);
    from(this.afAuth.auth.signOut()).subscribe(() => {
      this._router.navigate(['login']);
    });
  }

  public validateSession(): Observable<boolean> {
    return this.afAuth.authState.pipe(map(user => !!user));
  }

  public get isLoggedIn(): boolean {
    return this._isLoggedIn$.getValue();
  }

  public get isLoggedIn$(): Observable<boolean> {
    return this._isLoggedIn$.asObservable();
  }

  public sendPasswordResetLink(email: string): Observable<any> {
    return from(this.afAuth.auth.sendPasswordResetEmail(email));
  }

  private setUserData(uid: string, email: string): void {
    this.afs.collection('users-info').doc(uid).get().subscribe((userInfo) => {
      this.userData = {
        ...userInfo.data() as IUser,
        uid,
        email,
      };
      this.userData$.next(this.userData);
    });
  }
}
