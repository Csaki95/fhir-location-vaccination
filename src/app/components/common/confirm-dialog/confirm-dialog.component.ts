import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    private auth: AuthService
  ) {}

  ngOnInit(): void {}

  onYesClick(): void {
    this.dialogRef.close();
    this.auth.logOut();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
