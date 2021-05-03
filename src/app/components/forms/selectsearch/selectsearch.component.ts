import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject, Subject } from 'rxjs';

/**
 * Recieve a title and an Enum object
 * Then build a full-width autocomplete dropdown component from it
 */
@Component({
  selector: 'app-selectsearch',
  templateUrl: './selectsearch.component.html',
  styleUrls: ['./selectsearch.component.scss'],
})
export class SelectSearchComponent implements OnInit {
  selectControl: FormControl;
  searchFilterControl: FormControl;

  // setup properties
  @Input() title!: string;
  @Input() subtext!: string;
  @Input() isRequired!: boolean;
  @Input() multiselect!: boolean;
  @Input() hasNull?: boolean;

  // Input enum and a string array containing the values from it
  @Input() enum!: Object;
  public enumArray: string[] = [];

  // parent form requirements
  @Input() formName!: string;
  @Input() formGroup!: FormGroup;

  // Filtered list
  public filteredEnum: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);

  // Ondesttroy for unsubscribing from search input
  private _onDestroy = new Subject();

  constructor(private fb: FormBuilder) {
    this.selectControl = this.fb.control(null);
    this.searchFilterControl = this.fb.control(null);
  }

  ngOnInit(): void {
    this.enumToArray();

    this.formGroup.addControl(this.formName, this.selectControl);

    // Search value changes
    this.searchFilterControl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterEnum();
      });
  }

  // Unsub from searchFilterControl
  ngOnDestroy(): void {
    this._onDestroy.unsubscribe();
  }

  enumToArray() {
    this.enumArray = Object.values(this.enum).filter(
      (x) => typeof x === 'string'
    );
    if (this.hasNull) {
      this.enumArray.splice(0, 0, 'None');
    }
    this.filteredEnum.next(this.enumArray);
  }

  filterEnum() {
    // Get the search keyword
    let search = this.searchFilterControl.value;

    // Filter the list by the search
    this.filteredEnum.next(
      this.enumArray.filter(
        (enumArray) => enumArray.toLowerCase().indexOf(search) > -1
      )
    );
  }
}
