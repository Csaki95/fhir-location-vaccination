import { Component, OnInit } from '@angular/core';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  angularIcon = faAngular;
  authError: any;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    })
  }

  onSignIn(form: NgForm){
    const {email, password} = form.value;

    if (!form.valid){
      return;
    }
    this.auth.signIn(email, password);
    form.resetForm();
  }

  clearErr(){
    this.auth.clearError();
  }
}
