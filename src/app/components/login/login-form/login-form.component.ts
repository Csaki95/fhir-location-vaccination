import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faAngular } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  angularIcon = faAngular;
  regClicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() openRegistrationComp = new EventEmitter<boolean>();

  openRegistrationForm(value: void){
    this.openRegistrationComp.emit(true);
  }

  onSignIn(email: string, password: string){
    
  }
}
