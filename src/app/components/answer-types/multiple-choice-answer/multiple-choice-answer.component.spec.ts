import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiceAnswerComponent } from './multiple-choice-answer.component';

describe('MultipleChoiceAnswerComponent', () => {
  let component: MultipleChoiceAnswerComponent;
  let fixture: ComponentFixture<MultipleChoiceAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleChoiceAnswerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleChoiceAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
