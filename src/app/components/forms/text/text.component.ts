import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
  @Input() title!: string;
  @Input() subtext!: string;
  @Input() isRequired: boolean = false;
  @Input() isRange: boolean = false;

  @Output() formEmitter: EventEmitter<FormControl> = new EventEmitter();

  textForm = new FormControl('', [Validators.maxLength(300)]);

  constructor() { }

  ngOnInit(): void {
    this.formEmitter.emit(this.textForm);
  }
}
