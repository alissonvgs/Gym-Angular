import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewAcademiaComponent } from './new-academia.component';

describe('NewAcademiaComponent', () => {
  let component: NewAcademiaComponent;
  let fixture: ComponentFixture<NewAcademiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAcademiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAcademiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});