import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  // Input title and the enum we display
  @Input() title!: string;
  @Input() enum!: Object;

  // Outputs the selected value from the enum
  @Output() valueEmitter: EventEmitter<string> = new EventEmitter();
  private emitterSub?: Subscription;

  toggleForm = new FormControl();

  constructor() { }

  ngOnInit(): void {
    this.emitterSub = this.toggleForm.valueChanges.subscribe(val => {
      this.valueEmitter.emit(val);
    })
  }

  ngOnDestroy(): void {
    this.emitterSub?.unsubscribe();
  }
}
