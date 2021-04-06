import { Component, OnInit } from '@angular/core';
import { faAngular, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  angularIcon = faAngular;
  linkedinIcon = faLinkedin;
  gitIcon = faGithub;


  constructor() { }

  ngOnInit(): void {
  }

}
