import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

/**
 * Registers a new user by email and password
 *  if successful navigates to home page
 *  if not display the subscribed error message
 */
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  // Error message
  authError: any;
  private errorSub?: Subscription;

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.minLength(6), Validators.maxLength(100), Validators.required])
  })

  constructor(private auth: AuthService) { }

  // Subscribe to the error message
  ngOnInit(): void {
    this.errorSub = this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    })
  }

  // Clear current error (so it doesn't persist in auth service), and unsubscribe
  ngOnDestroy(): void {
    this.auth.clearError();
    this.errorSub?.unsubscribe();
  }

  
  onSignUp(){
    this.auth.createUser(this.form.get('email')?.value, this.form.get('password')?.value)
    if (this.authError)
      this.form.reset();
  }
}
