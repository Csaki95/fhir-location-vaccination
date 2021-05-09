import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
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
  isNull!: boolean;
  private mobileSub?: Subscription;
  Locations: Observable<Location[]> | null = null;
  private nullCheck?: Subscription;

  constructor(
    private responsiveService: ResponsiveService,
    private service: CrudService<Location>
  ) { }

  ngOnInit(): void {
    // Get observable location changes
    this.Locations = this.service.get('Locations', 'name');

    // Check if there are object in Locations
    this.nullCheck = this.Locations.subscribe((data) => {
      if(data.length === 0) {
        this.isNull = true;
      } else {
        this.isNull = false;
      }
    });

    // Subscribe to the screen size check
    this.mobileSub = this.responsiveService.isMobile$.subscribe((data) => {
      this.isMobile = data;
    });
  }

  ngOnDestroy(): void {
    // Unsub from everything
    this.mobileSub?.unsubscribe();
    this.nullCheck?.unsubscribe();
  }
}
