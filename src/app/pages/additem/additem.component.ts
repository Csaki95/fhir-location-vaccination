import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { Subject, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CrudService } from 'src/app/services/crud.service';
import { AddressType } from 'src/app/shared/models/enums/_addressType.enum';
import { AddressUse } from 'src/app/shared/models/enums/_addressUse.enum';
import { ContactSystem } from 'src/app/shared/models/enums/_contactSystem.enum';
import { ContactUse } from 'src/app/shared/models/enums/_contactUse.enum';
import { OperationalStatus } from 'src/app/shared/models/enums/_operational-status.enum';
import { PhysicalType } from 'src/app/shared/models/enums/_physical-type.enum';
import { Status } from 'src/app/shared/models/enums/_status.enum';
import { Type } from 'src/app/shared/models/enums/_type.enum';
import { Location } from 'src/app/shared/models/location.model';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss'],
})
export class AdditemComponent implements OnInit {
  angularIcon = faAngular;
  addForm: FormGroup;
  searchFilterControl: FormControl;
  formOutput: any;

  // Typedefs
  Status = Status;
  OperationalStatus = OperationalStatus;
  Type = Type;
  PhysicalType = PhysicalType;
  ContactSystem = ContactSystem;
  ContactUse = ContactUse;
  addressUse = AddressUse;
  addressType = AddressType;

  // Filtered list
  public filteredEnum: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);
  public enumArray: string[] = [];

  // Ondesttroy for unsubscribing from search input
  private _onDestroy = new Subject();

  constructor(
    private fb: FormBuilder,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private service: CrudService<Location>
  ) {
    // Main form
    this.addForm = this.fb.group({
      status: [null],
      operationalStatus: [null],
      name: [null, Validators.required],
      description: [null],
      type: [null],
      telekom: this.fb.group({
        contactSystem: [null],
        contactValue: [null],
        contactUse: [null],
      }),
      address: this.fb.group({
        use: [null],
        type: [null],
        line: [null, Validators.required],
        city: [null, Validators.required],
        postalCode: [
          null,
          Validators.compose([
            Validators.required,
            Validators.min(1000),
            Validators.max(9999),
            Validators.pattern('[0-9]{4}'),
          ]),
        ],
        country: [null, Validators.required],
      }),
      physicalType: [null],
      managingOrganization: [null],
      partOf: [null],
    });
    // Selectsearch field
    this.searchFilterControl = this.fb.control(null);
  }

  ngOnInit(): void {
    this.enumToArray();

    // Search value changes
    this.searchFilterControl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterEnum();
      });
  }

  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();

    this.addForm.valueChanges.subscribe({
      next: (value) => {
        console.log(this.addForm.value);
      },
    });
  }

  // Unsub from searchFilterControl
  ngOnDestroy(): void {
    this._onDestroy.unsubscribe();
  }

  getKeys(obj: any) {
    return Object.values(obj);
  }

  enumToArray() {
    this.enumArray = Object.values(this.Type).filter(
      (x) => typeof x === 'string'
    );
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

  submitForm(): void {
    let locationItem = this.addForm.value as Location;
    this.service.add('Locations',locationItem);
  }
}
