import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
  @Input() title!: string;
  @Input() subtext!: string;
  @Input() isRequired: boolean = false;

  @Output() valueEmitter: EventEmitter<string> = new EventEmitter();

  input: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onValueChange(event: string){
    this.valueEmitter.emit(event);
  }
}
