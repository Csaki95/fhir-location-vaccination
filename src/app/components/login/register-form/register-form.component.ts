import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() openRegistrationComp = new EventEmitter<boolean>();

  closeRegistrationForm(value: void){
    this.openRegistrationComp.emit(false);
  }

  onSignUp(email: string, password: string){
    
  }
}
