import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensemanagerPortalComponent } from './expensemanager-portal.component';

describe('ExpensemanagerPortalComponent', () => {
  let component: ExpensemanagerPortalComponent;
  let fixture: ComponentFixture<ExpensemanagerPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensemanagerPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensemanagerPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
