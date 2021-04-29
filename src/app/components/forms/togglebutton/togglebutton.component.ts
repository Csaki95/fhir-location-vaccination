import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

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
  toggleForm: FormControl;

  // Input title and the enum we display
  @Input() title!: string;
  @Input() enum!: Object;

  // Outputs the selected value from the enum
  @Output() formEmitter: EventEmitter<FormControl> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.toggleForm = this.fb.control('');
  }

  ngOnInit(): void {
    this.formEmitter.emit(this.toggleForm);
  }
}
