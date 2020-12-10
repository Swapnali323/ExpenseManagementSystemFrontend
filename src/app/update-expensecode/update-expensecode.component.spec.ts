import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExpensecodeComponent } from './update-expensecode.component';

describe('UpdateExpensecodeComponent', () => {
  let component: UpdateExpensecodeComponent;
  let fixture: ComponentFixture<UpdateExpensecodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateExpensecodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateExpensecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
