import { Component } from '@angular/core';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import {
  faPlus,
  faSignOutAlt,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { ResponsiveService } from 'src/app/services/responsive.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

/**
 * Responsive Navbar component
 *  when desktop full top navbar
 *  when mobile bottom navbar that expands upwards
 *
 * On "add new" navigate to the add form
 * On "logout" open confirmation dialog, if accepted log out with authservice
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  // Fontawesome icons used in the page
  angularIcon = faAngular;
  addIcon = faPlus;
  signOutIcon = faSignOutAlt;
  menuIcon = faBars;

  // Responsible for view change
  isOpen: boolean = false;
  isMobile!: boolean;
  private mobileSub?: Subscription;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private responsiveService: ResponsiveService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    // Subscribe to the screen size check
    this.mobileSub = this.responsiveService.isMobile$.subscribe((data) => {
      this.isMobile = data;
    });
  }

  ngOnDestroy(): void {
    // Unsub the screen size check
    this.mobileSub?.unsubscribe();
  }

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  logOut() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { title: 'Are you sure?' },
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) this.auth.logOut();
    });
  }

  addNew() {
    this.router.navigate(['/add']);
  }
}
