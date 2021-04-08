import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class FbBaseService {
  isLoggedIn: boolean = false;

  constructor(private afs: AngularFireAuth) { }

  // Login functions
  async signin(email: string, password: string){
    await this.afs.signInWithEmailAndPassword(email, password)
    .then(res=> {
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user));
    })
  }

  async signup(email: string, password: string){
    await this.afs.createUserWithEmailAndPassword(email, password)
    .then(res=> {
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user));
    })
  }

  logout(){
    this.afs.signOut();
    localStorage.removeItem('user');
  }
}
