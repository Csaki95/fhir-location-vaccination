import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

// Authorization service
export class FbBaseService {
  isLoggedIn: boolean = false;

  constructor(private angularFireAuth: AngularFireAuth) { }

  // Login functions
  async signin(email: string, password: string){
    await this.angularFireAuth.signInWithEmailAndPassword(email, password)
    .then(res=> {
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user));
    })
  }

  async signup(email: string, password: string){
    await this.angularFireAuth.createUserWithEmailAndPassword(email, password)
    .then(res=> {
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user));
    })
  }

  logout(){
    this.angularFireAuth.signOut();
    localStorage.removeItem('user');
  }
}
