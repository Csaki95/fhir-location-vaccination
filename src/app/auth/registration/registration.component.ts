import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  authError: any;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    })
  }

  onSignUp(form: NgForm){
    const {email, password} = form.value;

    if (!form.valid){
      return;
    }
    this.auth.createUser(email, password);
    form.resetForm();
  }

  clearErr(){
    this.auth.clearError();
  }

}
