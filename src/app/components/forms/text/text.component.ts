import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

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
  private emitterSub?: Subscription;

  textForm = new FormControl('', [Validators.maxLength(300)]);

  constructor() { }

  ngOnInit(): void {

    this.emitterSub = this.textForm.valueChanges.subscribe(val => {
      if(this.textForm.valid)
        this.valueEmitter.emit(val);
    })
  }

  ngOnDestroy(): void {
    this.emitterSub?.unsubscribe();
  }
}
