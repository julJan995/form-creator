import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTitleInputComponent } from './form-title-input.component';

describe('FormTitleInputComponent', () => {
  let component: FormTitleInputComponent;
  let fixture: ComponentFixture<FormTitleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTitleInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTitleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
