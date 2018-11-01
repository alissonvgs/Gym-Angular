import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEquipamentoComponent } from './edit-equipamento.component';

describe('EditEquipamentoComponent', () => {
  let component: EditEquipamentoComponent;
  let fixture: ComponentFixture<EditEquipamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEquipamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEquipamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
