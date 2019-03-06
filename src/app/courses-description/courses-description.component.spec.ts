import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDescriptionComponent } from './courses-description.component';

describe('CoursesDescriptionComponent', () => {
  let component: CoursesDescriptionComponent;
  let fixture: ComponentFixture<CoursesDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
