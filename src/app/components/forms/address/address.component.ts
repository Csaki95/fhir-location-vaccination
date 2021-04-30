import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddressType } from 'src/app/shared/models/enums/_addressType.enum';
import { AddressUse } from 'src/app/shared/models/enums/_addressUse.enum';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  addressForm: FormGroup;

  // Typedefs
  addressUse = AddressUse;
  addressType = AddressType;

  // Output to parent
  @Output() formEmitter: EventEmitter<FormGroup> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      line: [null, Validators.required],
      city: [null, Validators.required],
      postalCode: [null, Validators.compose([
        Validators.required, Validators.min(1000), Validators.max(9999), Validators.pattern('[0-9]{4}')])
      ],
      country: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.formEmitter.emit(this.addressForm);
  }
  
  addChildFormControl(formName: string, form: FormControl){
    this.addressForm.addControl(formName, form);
  }
}
