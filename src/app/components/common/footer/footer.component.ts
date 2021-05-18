import { Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

/**
 * Footer component with links to github and linkedIn pages
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  gitIcon = faGithub;
  github = 'https://github.com/Csaki95/fhir-location-vaccination.git';

  constructor() {}
}
