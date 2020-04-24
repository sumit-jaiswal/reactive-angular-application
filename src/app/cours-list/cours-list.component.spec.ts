import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursListComponent } from './cours-list.component';

describe('CoursListComponent', () => {
  let component: CoursListComponent;
  let fixture: ComponentFixture<CoursListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
