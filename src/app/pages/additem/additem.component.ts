import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { CrudService } from 'src/app/services/crud.service';
import { ContactSystem } from 'src/app/shared/models/enums/_contactSystem.enum';
import { ContactUse } from 'src/app/shared/models/enums/_contactUse.enum';
import { OperationalStatus } from 'src/app/shared/models/enums/_operational-status.enum';
import { PhysicalType } from 'src/app/shared/models/enums/_physical-type.enum';
import { Status } from 'src/app/shared/models/enums/_status.enum';
import { Type } from 'src/app/shared/models/enums/_type.enum';


@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
})
export class AdditemComponent implements OnInit {
  angularIcon = faAngular;
  addForm: FormGroup;
  formOutput: any;

  // Typedefs
  Status = Status;
  OperationalStatus = OperationalStatus;
  Type = Type;
  PhysicalType = PhysicalType;

  constructor(private fb: FormBuilder,
              private readonly changeDetectorRef: ChangeDetectorRef) {
    this.addForm = this.fb.group({})
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();

    this.addForm
      .valueChanges
      .subscribe({
        next: (value) => {
          console.log(this.addForm.value);
        }
      });
  }

  addChildFormGroup(formName: string, form: FormGroup){
    this.addForm.addControl(formName, form);
  }

  addChildFormControl(formName: string, form: FormControl){
    this.addForm.addControl(formName, form);
  }

  submit(): void{

  }
}
