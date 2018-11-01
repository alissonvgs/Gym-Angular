import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEquipamentoComponent } from './list-equipamento.component';

describe('ListEquipamentoComponent', () => {
  let component: ListEquipamentoComponent;
  let fixture: ComponentFixture<ListEquipamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEquipamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEquipamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
