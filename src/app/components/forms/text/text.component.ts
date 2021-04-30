import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

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

  textForm: FormControl;

  constructor(private fb: FormBuilder) { 
    this.textForm = this.fb.control(null, [Validators.maxLength(300), Validators.required])
  }

  ngOnInit(): void {
    this.formEmitter.emit(this.textForm);
  }
}
