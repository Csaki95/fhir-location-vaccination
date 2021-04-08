import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faAngular } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  angularIcon = faAngular;

  constructor() { }

  @Output() openRegistrationComp = new EventEmitter<boolean>();

  openRegistrationForm(value: void){
    this.openRegistrationComp.emit(true);
  }

  onSignIn(form: NgForm){
    
  }
}
