import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxGridAnswerComponent } from './checkbox-grid-answer.component';

describe('CheckboxGridAnswerComponent', () => {
  let component: CheckboxGridAnswerComponent;
  let fixture: ComponentFixture<CheckboxGridAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxGridAnswerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxGridAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
