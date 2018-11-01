import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { routes } from '../../routes';
import { AppService } from '../../app.service';
import { EquipamentoService } from '../shared/equipamento.service';

import { FormEquipamentoComponent } from '../form-equipamento/form-equipamento.component';
import { ListEquipamentoComponent } from '../list-equipamento/list-equipamento.component';
import { ViewEquipamentoComponent } from './view-equipamento.component';

describe('ViewEquipamentoComponent', () => {
  let component: ViewEquipamentoComponent;
  let fixture: ComponentFixture<ViewEquipamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormEquipamentoComponent,
        ListEquipamentoComponent,
        ViewEquipamentoComponent
      ],
      imports: [
        RouterModule.forRoot(routes),
        FormsModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
        AppService,
        EquipamentoService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEquipamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
