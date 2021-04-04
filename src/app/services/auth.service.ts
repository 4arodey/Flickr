import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User} from 'src/app/interfaces/user.model';

import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CustomAny } from 'src/app/interfaces/generic';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$: Observable<User>;
  public readonly LOCALSTORAGE_NAME = 'flickr_user';

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async googleSignIn(): Promise<CustomAny>  {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    localStorage.setItem(this.LOCALSTORAGE_NAME, 'user');
    return this.updateUserDate(credential.user);
  }

  async signOut(): Promise<CustomAny> {
    await this.afAuth.signOut();
    localStorage.removeItem(this.LOCALSTORAGE_NAME);
    return this.router.navigate(['/']);
  }

  public checkUser(): boolean {
    return !localStorage.getItem(this.LOCALSTORAGE_NAME);
  }

  private updateUserDate({ uid, email, displayName, photoURL }: User): Promise<void> {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);

    const data = {
      uid,
      email,
      displayName,
      photoURL
    };

    return userRef.set(data, { merge: true});
  }

}
