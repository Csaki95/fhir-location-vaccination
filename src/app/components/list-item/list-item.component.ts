import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { AddressType } from 'src/app/shared/models/enums/_addressType.enum';
import { Location } from 'src/app/shared/models/location.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() locationItem!: Location;

  constructor(private router: Router,
              private service: CrudService<Location>) { }

  ngOnInit(): void {
  }

  getAddressType(type: AddressType): string{
    switch(type){
      case AddressType.physical: return "Only physical address";
      case AddressType.postal: return "Only postal address";
      case AddressType.both: return "Both physical and postal address";
    }
  }

  edit(){

  }

  delete(){
    if (this.locationItem.id)
      this.service.delete('Locations',this.locationItem.id);
  }
}
