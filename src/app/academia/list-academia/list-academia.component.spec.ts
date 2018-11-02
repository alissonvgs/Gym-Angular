import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListAcademiaComponent } from './list-academia.component';

describe('ListEquipamentoComponent', () => {
  let component: ListAcademiaComponent;
  let fixture: ComponentFixture<ListAcademiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAcademiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAcademiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});