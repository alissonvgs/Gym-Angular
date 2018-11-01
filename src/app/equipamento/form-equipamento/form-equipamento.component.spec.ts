import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEquipamentoComponent } from './form-equipamento.component';

describe('FormEquipamentoComponent', () => {
  let component: FormEquipamentoComponent;
  let fixture: ComponentFixture<FormEquipamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEquipamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEquipamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
