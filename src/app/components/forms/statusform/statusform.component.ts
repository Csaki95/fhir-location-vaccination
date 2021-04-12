import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Status } from 'src/app/shared/models/enums/_status.enum';


@Component({
  selector: 'app-statusform',
  templateUrl: './statusform.component.html',
  styleUrls: ['./statusform.component.scss']
})
export class StatusformComponent implements OnInit {
  Status = Status;

  @Output() statusEmitter: EventEmitter<Status> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onValueChange(value: Status){
    this.statusEmitter.emit(value);
  }

}
