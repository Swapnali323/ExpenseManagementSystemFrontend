import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectwiseemployeesComponent } from './projectwiseemployees.component';

describe('ProjectwiseemployeesComponent', () => {
  let component: ProjectwiseemployeesComponent;
  let fixture: ComponentFixture<ProjectwiseemployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectwiseemployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectwiseemployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
