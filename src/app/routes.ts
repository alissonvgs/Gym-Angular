import { Routes } from '@angular/router';

import { ListEquipamentoComponent } from './equipamento/list-equipamento/list-equipamento.component';
import { NewEquipamentoComponent } from './equipamento/new-equipamento/new-equipamento.component';
import { ShowEquipamentoComponent } from './equipamento/show-equipamento/show-equipamento.component';
import { EditEquipamentoComponent } from './equipamento/edit-equipamento/edit-equipamento.component';

import { ListFuncionarioComponent } from './funcionario/list-funcionario/list-funcionario.component';
import { NewFuncionarioComponent } from './funcionario/new-funcionario/new-funcionario.component';
import { ShowFuncionarioComponent } from './funcionario/show-funcionario/show-funcionario.component';
import { EditFuncionarioComponent } from './funcionario/edit-funcionario/edit-funcionario.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ListClienteComponent } from './cliente/list-cliente/list-cliente.component';
import { NewClienteComponent } from './cliente/new-cliente/new-cliente.component';
import { ShowClienteComponent } from './cliente/show-cliente/show-cliente.component';
import { EditClienteComponent } from './cliente/edit-cliente/edit-cliente.component';

export const routes: Routes = [
<<<<<<< HEAD
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},

  { path: 'equipamentos' , component: ListEquipamentoComponent},
  { path: 'equipamentos/new', component: NewEquipamentoComponent},
  { path: 'equipamentos/:id', component: ShowEquipamentoComponent},
  { path: 'equipamentos/edit/:id', component: EditEquipamentoComponent},
=======
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
>>>>>>> origin/master

  { path: 'equipamentos', component: ListEquipamentoComponent },
  { path: 'equipamentos/new', component: NewEquipamentoComponent },
  { path: 'equipamentos/:id', component: ShowEquipamentoComponent },
  { path: 'equipamento/edit/:id', component: EditEquipamentoComponent },

  { path: 'funcionarios', component: ListFuncionarioComponent },
  { path: 'funcionarios/new', component: NewFuncionarioComponent },
  { path: 'funcionarios/:id', component: ShowFuncionarioComponent },
  { path: 'funcionarios/edit/:id', component: EditFuncionarioComponent },

  { path: 'clientes', component: ListClienteComponent },
  { path: 'clientes/new', component: NewClienteComponent },
  { path: 'clientes/:id', component: ShowClienteComponent },
  { path: 'clientes/edit/:id', component: EditClienteComponent },
  { path: 'dashboard', component: DashboardComponent }

];