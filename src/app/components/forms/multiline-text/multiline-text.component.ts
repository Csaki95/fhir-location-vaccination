import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-multiline-text',
  templateUrl: './multiline-text.component.html',
  styleUrls: ['./multiline-text.component.scss']
})
export class MultilineTextComponent implements OnInit {
  plusIcon = faPlus;

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
