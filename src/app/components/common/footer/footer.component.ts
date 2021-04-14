import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  linkedinIcon = faLinkedin;
  gitIcon = faGithub;
  linkedin= "https://www.linkedin.com/in/gergo-csaki-60b838145";
  github = "https://github.com/Csaki95/fhir-location-vaccination.git";


  constructor() { }

  ngOnInit(): void {
  }

}