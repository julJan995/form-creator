import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearScaleAnswerComponent } from './linear-scale-answer.component';

describe('LinearScaleAnswerComponent', () => {
  let component: LinearScaleAnswerComponent;
  let fixture: ComponentFixture<LinearScaleAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinearScaleAnswerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinearScaleAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
