import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser} from 'src/app/interfaces/user.model';

import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CustomAny } from 'src/app/interfaces/generic';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public user$: Observable<IUser>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<IUser>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  public async googleSignIn(): Promise<CustomAny>  {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    await this.router.navigate(['/']);
    return this.updateUserDate(credential.user);
  }

  public async signOut(): Promise<CustomAny> {
    await this.afAuth.signOut();
    return this.router.navigate(['/']);
  }

  private updateUserDate({ uid, email, displayName, photoURL }: IUser): Promise<void> {
    const userRef: AngularFirestoreDocument<IUser> = this.afs.doc(`users/${uid}`);

    const data = {
      uid,
      email,
      displayName,
      photoURL
    };

    return userRef.set(data, { merge: true});
  }

}
