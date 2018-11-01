import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ShowEquipamentoComponent } from './show-equipamento.component';
import { NewEquipamentoComponent } from '../new-equipamento/new-equipamento.component';
import { ListEquipamentoComponent } from '../list-equipamento/list-equipamento.component';
import { routes } from '../../routes';
import { EquipamentoService } from '../equipamento.service';
import { EditEquipamentoComponent } from '../edit-equipamento/edit-equipamento.component';
import { AppService } from '../../app.service';

describe('ShowEquipamentoComponent', () => {
  let component: ShowEquipamentoComponent;
  let fixture: ComponentFixture<ShowEquipamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewEquipamentoComponent,
        ShowEquipamentoComponent,
        ListEquipamentoComponent,
        EditEquipamentoComponent
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
    fixture = TestBed.createComponent(ShowEquipamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
