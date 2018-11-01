import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppService } from './app.service';
import { FormsModule } from '@angular/forms';
import { routes } from './routes';
import {APP_BASE_HREF} from '@angular/common';

import { EquipamentoService } from '../app/equipamento/equipamento.service';
import { ListEquipamentoComponent } from './equipamento/list-equipamento/list-equipamento.component';
import { NewEquipamentoComponent } from './equipamento/new-equipamento/new-equipamento.component';
import { ShowEquipamentoComponent } from './equipamento/show-equipamento/show-equipamento.component';

import { EditClienteComponent } from './cliente/edit-cliente/edit-cliente.component';
import { ShowClienteComponent } from './cliente/show-cliente/show-cliente.component';
import { NewClienteComponent } from './cliente/new-cliente/new-cliente.component';
import { ListClienteComponent } from './cliente/list-cliente/list-cliente.component';
import { ClienteService } from './cliente/cliente.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ListEquipamentoComponent,
        NewEquipamentoComponent,
        ShowEquipamentoComponent
      ],
      imports:[
        RouterModule.forRoot(routes),
        FormsModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' },
        EquipamentoService,
        AppService
]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Academy'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Academy');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Academy!');
  });
});