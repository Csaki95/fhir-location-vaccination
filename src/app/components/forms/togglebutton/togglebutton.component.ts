import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Status } from 'src/app/shared/models/enums/_status.enum';


@Component({
  selector: 'app-togglebutton',
  templateUrl: './togglebutton.component.html',
  styleUrls: ['./togglebutton.component.scss']
})
export class ToggleButtonComponent implements OnInit {
  @Input() title!: string;
  @Input() enum!: Object;

  @Output() statusEmitter: EventEmitter<Status> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onValueChange(value: Status){
    this.statusEmitter.emit(value);
  }
}
