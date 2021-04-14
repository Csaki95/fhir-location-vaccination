import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

/**
 * Recieve a title and an Enum object
 * Then build a full-width autocomplete dropdown component from it
 * 
 * returns: the selected enum value
 */
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  @Input() title!: string;
  @Input() subtext!: string;
  @Input() enum!: Object;

  myControl = new FormControl();

  @Output() valueEmitter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onValueChange(event: { option: { id: string }; }){
    this.valueEmitter.emit(event.option.id);
  }
}
