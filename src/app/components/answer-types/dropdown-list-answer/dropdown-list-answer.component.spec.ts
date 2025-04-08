import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownListAnswerComponent } from './dropdown-list-answer.component';

describe('DropdownListAnswerComponent', () => {
  let component: DropdownListAnswerComponent;
  let fixture: ComponentFixture<DropdownListAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownListAnswerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownListAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
