import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiceGridAnswerComponent } from './multiple-choice-grid-answer.component';

describe('MultipleChoiceGridAnswerComponent', () => {
  let component: MultipleChoiceGridAnswerComponent;
  let fixture: ComponentFixture<MultipleChoiceGridAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleChoiceGridAnswerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleChoiceGridAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
