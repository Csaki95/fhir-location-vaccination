import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit {
  textForm: FormControl;

  // setup properties
  @Input() title!: string;
  @Input() subtext!: string;
  @Input() isRequired: boolean = false;
  @Input() isRange: boolean = false;

  // parent form requirements
  @Input() formName!: string;
  @Input() formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.textForm = this.fb.control(null, [Validators.maxLength(300)]);
  }

  ngOnInit(): void {
    this.formGroup.addControl(this.formName, this.textForm);
  }
}
