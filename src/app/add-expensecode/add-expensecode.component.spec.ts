import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpensecodeComponent } from './add-expensecode.component';

describe('AddExpensecodeComponent', () => {
  let component: AddExpensecodeComponent;
  let fixture: ComponentFixture<AddExpensecodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExpensecodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpensecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
