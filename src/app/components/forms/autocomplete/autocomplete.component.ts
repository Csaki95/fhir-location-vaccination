import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { take, takeUntil } from 'rxjs/operators';
import { ReplaySubject, Subject, Subscription } from 'rxjs';

/**
 * Recieve a title and an Enum object
 * Then build a full-width autocomplete dropdown component from it
 * 
 * returns: the selected enum value
 */
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  @Input() title!: string;
  @Input() subtext!: string;
  @Input() enum!: Object;
  public enumArray?: string[];

  myControl = new FormControl();
  searchFilterControl = new FormControl();

  public filteredEnum: ReplaySubject<Object> = new ReplaySubject<Object>(1);

  @Output() valueEmitter: EventEmitter<any> = new EventEmitter();
  private emitterSub?: Subscription;
  private _onDestroy = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.enumArray = Object.values(this.enum);
    console.log(this.enumArray)

    this.emitterSub = this.myControl.valueChanges.subscribe(val => {
      if(this.myControl.value == 'null'){
        this.valueEmitter.emit(null);
      } else if (this.myControl.valid){
        this.valueEmitter.emit(val)
      }
    })

    // search value changes
    this.searchFilterControl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterEnum();
      })
  }

  ngOnDestroy(): void {
    this.emitterSub?.unsubscribe();
  }

  filterEnum() {
    if(!this.enum){
      return;
    }
    let search = this.searchFilterControl.value;
    if(!search){
    }
  }
}
