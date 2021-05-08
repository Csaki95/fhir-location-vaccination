import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudService } from 'src/app/services/crud.service';
import { ResponsiveService } from 'src/app/services/responsive.service';
import { Location } from 'src/app/shared/models/location.model';

/**
 * Home page lists current locations with listItem module
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isMobile!: boolean;
  Locations: Observable<Location[]> | null = null;

  constructor(
    private responsiveService: ResponsiveService,
    private service: CrudService<Location>
  ) {
    this.isMobile = responsiveService.getIsMobile();
  }

  ngOnInit(): void {
    // Subscribe to location changes
    this.Locations = this.service.get('Locations', 'name');
  }
}
