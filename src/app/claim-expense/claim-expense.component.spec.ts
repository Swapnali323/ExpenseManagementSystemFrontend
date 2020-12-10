import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimExpenseComponent } from './claim-expense.component';

describe('ClaimExpenseComponent', () => {
  let component: ClaimExpenseComponent;
  let fixture: ComponentFixture<ClaimExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
