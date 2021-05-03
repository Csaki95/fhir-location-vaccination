import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactSystem } from 'src/app/shared/models/enums/_contactSystem.enum';
import { ContactUse } from 'src/app/shared/models/enums/_contactUse.enum';
@Component({
  selector: 'app-telekom',
  templateUrl: './telekom.component.html',
  styleUrls: ['./telekom.component.scss'],
})
export class TelekomComponent implements OnInit {
  telecom: FormGroup;

  // Typedef
  ContactSystem = ContactSystem;
  ContactUse = ContactUse;

  // parent form requirements
  @Input() formName!: string;
  @Input() formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.telecom = this.fb.group({});
  }

  ngOnInit(): void {
    this.formGroup.addControl(this.formName, this.telecom);
  }
}
