import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleChoiceAnswerComponent } from './single-choice-answer.component';

describe('SingleChoiceAnswerComponent', () => {
  let component: SingleChoiceAnswerComponent;
  let fixture: ComponentFixture<SingleChoiceAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleChoiceAnswerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleChoiceAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
