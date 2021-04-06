import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faAngular } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  angularIcon = faAngular;
  isRegistration = false;

  constructor() { }

  ngOnInit(): void {
  }

  login(form: NgForm): void {
    
  }

  openRegistration(): void{
    this.isRegistration = true;
  }

  closeRegistration(): void{
    this.isRegistration = false;
  }

}
