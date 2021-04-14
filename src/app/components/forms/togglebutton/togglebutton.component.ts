import { TypeofExpr } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Status } from 'src/app/shared/models/enums/_status.enum';

/**
 * Recieve a title and an Enum object
 * Then build a full-width toggle button component from it
 * 
 * returns: the selected enum value
 */
@Component({
  selector: 'app-togglebutton',
  templateUrl: './togglebutton.component.html',
  styleUrls: ['./togglebutton.component.scss']
})
export class ToggleButtonComponent implements OnInit {
  @Input() title!: string;
  @Input() enum!: Object;

  @Output() valueEmitter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onValueChange(value: string){
    this.valueEmitter.emit(value);
  }
}
