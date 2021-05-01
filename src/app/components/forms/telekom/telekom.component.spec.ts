import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelekomComponent } from './telekom.component';

describe('TelekomComponent', () => {
  let component: TelekomComponent;
  let fixture: ComponentFixture<TelekomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelekomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelekomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
