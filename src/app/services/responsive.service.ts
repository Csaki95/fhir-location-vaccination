import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  private isMobile!: boolean;

  constructor(public breakpointObserver: BreakpointObserver) {
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

  getIsMobile(): boolean{
    return this.isMobile;
  }
}
