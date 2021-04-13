import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalStatusformComponent } from './operational-statusform.component';

describe('OperationalStatusformComponent', () => {
  let component: OperationalStatusformComponent;
  let fixture: ComponentFixture<OperationalStatusformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationalStatusformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationalStatusformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
