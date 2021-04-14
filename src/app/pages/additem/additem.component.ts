import { Component, OnInit } from '@angular/core';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { Status } from 'src/app/shared/models/enums/_status.enum';


@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
})
export class AdditemComponent implements OnInit {
  angularIcon = faAngular;

  Status = Status;

  constructor() { }

  ngOnInit(): void {
  }

  setStatus(value: Status){
    var status: Status = (<any>Status)[value];
    console.log(status);
  }
}
