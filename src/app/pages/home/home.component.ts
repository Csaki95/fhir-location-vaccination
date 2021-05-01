import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { Location } from 'src/app/shared/models/location.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isMobile: boolean = false;
  Locations: Location[] | null = null;

  constructor(public breakpointObserver: BreakpointObserver,
              private router: Router) { }
  
  ngOnInit(): void {
    /**
     * Subscribe to location changes
     */

    /**
     * Subscribe to breakpointObserver
     * under 900px we switch to Mobile view
     */
    this.breakpointObserver
      .observe(['(min-width: 900px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isMobile = false;
        } else {
          this.isMobile = true;
        }
      });
  }

  openAddPage(){
    this.router.navigate(['/add']);
  }
}
