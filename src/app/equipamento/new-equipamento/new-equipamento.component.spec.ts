import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEquipamentoComponent } from './new-equipamento.component';

describe('NewEquipamentoComponent', () => {
  let component: NewEquipamentoComponent;
  let fixture: ComponentFixture<NewEquipamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEquipamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEquipamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
