import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-multiline-text',
  templateUrl: './multiline-text.component.html',
  styleUrls: ['./multiline-text.component.scss']
})
export class MultilineTextComponent implements OnInit {
  @Input() title!: string;
  @Input() isRequired: boolean = false;

  @Output() valueEmitter: EventEmitter<string[]> = new EventEmitter();

  input: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onValueChange(event: string){

  }
}
