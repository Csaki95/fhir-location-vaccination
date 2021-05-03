import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AddressType } from 'src/app/shared/models/enums/_addressType.enum';
import { AddressUse } from 'src/app/shared/models/enums/_addressUse.enum';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  address: FormGroup;

  // Typedefs
  addressUse = AddressUse;
  addressType = AddressType;

  // parent form requirements
  @Input() formName!: string;
  @Input() formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.address = this.fb.group({
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
    });
  }

  ngOnInit(): void {
    this.formGroup.addControl(this.formName, this.address);
  }
}
