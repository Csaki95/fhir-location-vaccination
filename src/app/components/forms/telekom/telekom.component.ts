import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ContactSystem } from 'src/app/shared/models/enums/_contactSystem.enum';
import { ContactUse } from 'src/app/shared/models/enums/_contactUse.enum';
import { PhysicalType } from 'src/app/shared/models/enums/_physical-type.enum';
import { Type } from 'src/app/shared/models/enums/_type.enum';

@Component({
  selector: 'app-telekom',
  templateUrl: './telekom.component.html',
  styleUrls: ['./telekom.component.scss']
})
export class TelekomComponent implements OnInit {
  telecom: FormGroup;

  // Typedef
  ContactSystem = ContactSystem;
  ContactUse = ContactUse;
  PhysicalType = PhysicalType;

  // Output to parent
  @Output() formEmitter: EventEmitter<FormGroup> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.telecom = this.fb.group({});
  }
  ngOnInit(): void {
    this.formEmitter.emit(this.telecom);
  }
  
  addChildFormControl(formName: string, form: FormControl){
    this.telecom.addControl(formName, form);
  }
}
