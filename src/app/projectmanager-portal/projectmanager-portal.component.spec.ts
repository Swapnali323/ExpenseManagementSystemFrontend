import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectmanagerPortalComponent } from './projectmanager-portal.component';

describe('ProjectmanagerPortalComponent', () => {
  let component: ProjectmanagerPortalComponent;
  let fixture: ComponentFixture<ProjectmanagerPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectmanagerPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectmanagerPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
