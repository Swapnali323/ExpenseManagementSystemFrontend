import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchExpenseclaimComponent } from './search-expenseclaim.component';

describe('SearchExpenseclaimComponent', () => {
  let component: SearchExpenseclaimComponent;
  let fixture: ComponentFixture<SearchExpenseclaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchExpenseclaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchExpenseclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
