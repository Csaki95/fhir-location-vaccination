import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

/**
 * Recieve a title and an Enum object
 * Then build a full-width toggle button component from it
 *
 * returns: the selected enum value
 */
@Component({
  selector: 'app-togglebutton',
  templateUrl: './togglebutton.component.html',
  styleUrls: ['./togglebutton.component.scss'],
})
export class ToggleButtonComponent implements OnInit {
  toggleForm: FormControl;

  // Input title and the enum we display
  @Input() title!: string;
  @Input() enum!: Object;

  // parent form requirements
  @Input() formName!: string;
  @Input() formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.toggleForm = this.fb.control(null);
  }

  ngOnInit(): void {
    this.formGroup.addControl(this.formName, this.toggleForm);
  }
}
