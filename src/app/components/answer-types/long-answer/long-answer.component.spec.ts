import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongAnswerComponent } from './long-answer.component';

describe('LongAnswerComponent', () => {
  let component: LongAnswerComponent;
  let fixture: ComponentFixture<LongAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LongAnswerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
