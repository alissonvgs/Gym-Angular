import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { routes } from './routes';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';


import { ListFuncionarioComponent } from './funcionario/list-funcionario/list-funcionario.component';
import { NewFuncionarioComponent } from './funcionario/new-funcionario/new-funcionario.component';
import { FuncionarioService } from './funcionario/funcionario.service';
import { ShowFuncionarioComponent } from './funcionario/show-funcionario/show-funcionario.component';
import { EditFuncionarioComponent } from './funcionario/edit-funcionario/edit-funcionario.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { NewEquipamentoComponent } from './equipamento/new-equipamento/new-equipamento.component';
import { ShowEquipamentoComponent } from './equipamento/show-equipamento/show-equipamento.component';
import { ListEquipamentoComponent } from './equipamento/list-equipamento/list-equipamento.component';
import { EditEquipamentoComponent } from './equipamento/edit-equipamento/edit-equipamento.component';
import { EquipamentoService } from './equipamento/equipamento.service';

import { EditClienteComponent } from './cliente/edit-cliente/edit-cliente.component';
import { ListClienteComponent } from './cliente/list-cliente/list-cliente.component';
import { NewClienteComponent } from './cliente/new-cliente/new-cliente.component';
import { ShowClienteComponent } from './cliente/show-cliente/show-cliente.component';
import { ClienteService } from './cliente/cliente.service';

@NgModule({
  declarations: [
    AppComponent,
    ListFuncionarioComponent,
    NewFuncionarioComponent,
    ShowFuncionarioComponent,
    EditFuncionarioComponent,
    NewEquipamentoComponent,
    ShowEquipamentoComponent,
    ListEquipamentoComponent,
    EditEquipamentoComponent,
    NewClienteComponent,
    ListClienteComponent,
    ShowClienteComponent,
    EditClienteComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AppService,
    FuncionarioService,
    EquipamentoService,
    ClienteService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }