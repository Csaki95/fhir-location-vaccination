import { Component, OnInit } from '@angular/core';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { OperationalStatus } from 'src/app/shared/models/enums/_operational-status.enum';
import { Status } from 'src/app/shared/models/enums/_status.enum';


@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
})
export class AdditemComponent implements OnInit {
  angularIcon = faAngular;

  // Typedefs
  Status = Status;
  OperationalStatus = OperationalStatus;

  constructor() { }

  ngOnInit(): void {
  }

  setStatus(value: string){
    let status: Status = value as Status;
    console.log(status);
  }

  setOperationalStatus(value: string){
    let opStatus: OperationalStatus = value as OperationalStatus;
    console.log(opStatus);
  }

  setName(value: string){
    console.log(value);
  }

  setDescription(value: string){
    console.log(value);
  }
  
  setAlias(value: string[]){
    console.log(value);
  }
}
