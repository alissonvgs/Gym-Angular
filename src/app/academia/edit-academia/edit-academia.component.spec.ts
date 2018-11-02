import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAcademiaComponent } from './edit-academia.component';

describe('EditAcademiaComponent', () => {
  let component: EditAcademiaComponent;
  let fixture: ComponentFixture<EditAcademiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAcademiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAcademiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});