import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isMobile: boolean = false;

  constructor(public breakpointObserver: BreakpointObserver,
              private router: Router) { }

  /**
   * Subscribe to breakpointObserver
   * under 900px we switch to Mobile view
   */
  ngOnInit(): void {
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
