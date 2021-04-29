import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject, Subject, Subscription } from 'rxjs';

/**
 * Recieve a title and an Enum object
 * Then build a full-width autocomplete dropdown component from it
 * 
 * returns: the selected enum value
 */
@Component({
  selector: 'app-selectsearch',
  templateUrl: './selectsearch.component.html',
  styleUrls: ['./selectsearch.component.scss'] 
})
export class SelectSearchComponent implements OnInit {
  @Input() title!: string;
  @Input() subtext!: string;
  @Input() isRequired!: boolean;
  @Input() multiselect!: boolean;
  @Input() hasNull?: boolean;

  // Input enum and a string array containing the values from it
  @Input() enum!: Object;
  public enumArray: string[] = [];

  // Form controls
  myControl = new FormControl();
  searchFilterControl = new FormControl();

  // Filtered list
  public filteredEnum: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);

  // Output to parent
  @Output() formEmitter: EventEmitter<FormControl> = new EventEmitter();
  // Ondesttroy for unsubscribing from search input
  private _onDestroy = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.enumToArray();

    // Subscribe to emit value towards parent
    this.formEmitter.emit(this.myControl);

    // Search value changes
    this.searchFilterControl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterEnum();
      })
  }

  // Unsub from searchFilterControl, and emitter
  ngOnDestroy(): void {
    this._onDestroy.unsubscribe();
  }

  enumToArray(){
    this.enumArray = Object.values(this.enum).filter(x => typeof x === 'string');
    if(this.hasNull){
      this.enumArray.splice(0,0,"None");
    }
    this.filteredEnum.next(
      this.enumArray
    );
  }

  filterEnum() {
    // Get the search keyword
    let search = this.searchFilterControl.value;
    if(!search){
    }

    // Filter the list by the search
    this.filteredEnum.next(
      this.enumArray.filter(enumArray => enumArray.toLowerCase().indexOf(search) > -1)
    );
  }
}
