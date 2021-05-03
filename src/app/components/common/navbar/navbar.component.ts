import { Component, Input, OnInit, Output } from '@angular/core';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import {
  faPlus,
  faSignOutAlt,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

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
  @Input() isMobile: boolean = false;

  // Emitter to Home for opening add new item panel
  @Output() addNewItem: EventEmitter<any> = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  logOut() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
    });
  }

  addNew() {
    this.addNewItem.emit();
  }
}
