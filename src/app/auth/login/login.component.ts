import { Component, OnInit } from '@angular/core';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

/**
 * Logs in the user
 *  if succesfull redirects to home
 *  if not display the subscribed error message
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // Reference to the angular icon, and error message
  angularIcon = faAngular;
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

  // Display the built in email validation error messages
  getError(){
    if (this.form.get('email')?.hasError('required')) {
      return 'You must enter a value'
    }
    
    return this.form.get('email')?.hasError('email') ? 'Not a valid email' : '';
  }

  // Call sign in auth service
  onSignIn(){
    this.auth.signIn(this.form.get('email')?.value, this.form.get('password')?.value);
  }
}
