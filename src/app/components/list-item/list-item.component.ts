import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { AddressType } from 'src/app/shared/models/enums/_addressType.enum';
import { Location } from 'src/app/shared/models/location.model';
import { ConfirmDialogComponent } from '../common/confirm-dialog/confirm-dialog.component';

/**
 * List Item component
 *  when listing on home page this component is one displayed item
 *  recieves a Location object as input which gets displayed
 */
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() locationItem!: Location;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private service: CrudService<Location>
  ) {}

  // Returns an appropriate text representation depending on address type
  getAddressType(type: AddressType): string {
    switch (type) {
      case AddressType.physical:
        return 'Only physical address';
      case AddressType.postal:
        return 'Only postal address';
      case AddressType.both:
        return 'Both physical and postal address';
    }
  }

  // If the id of the location exists navigate to edit page location id as parameter
  edit() {
    if (this.locationItem.id)
      this.router.navigate(['edit'], {
        queryParams: { id: this.locationItem.id },
      });
  }

  // Open confirmation dialog if it's returns true delete the object with the id
  delete() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '500px',
      data: { title: 'Are you sure you want to delete?' },
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res && this.locationItem.id)
        this.service.delete('Locations', this.locationItem.id);
    });
  }
}
