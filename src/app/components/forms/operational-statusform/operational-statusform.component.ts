import { Component, OnInit } from '@angular/core';
import { OperationalStatus } from 'src/app/shared/models/enums/_operational-status.enum';


@Component({
  selector: 'app-operational-statusform',
  templateUrl: './operational-statusform.component.html',
  styleUrls: ['./operational-statusform.component.scss']
})
export class OperationalStatusformComponent implements OnInit {
  OperationalStatus = OperationalStatus;

  constructor() { }

  ngOnInit(): void {
  }

  
}
