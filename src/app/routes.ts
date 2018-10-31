import { Routes } from '@angular/router';

import { ListEquipamentoComponent } from './equipamento/list-equipamento/list-equipamento.component';
import { FormEquipamentoComponent } from './equipamento/form-equipamento/form-equipamento.component';
import { ViewEquipamentoComponent } from './equipamento/view-equipamento/view-equipamento.component';


import { ListFuncionarioComponent } from './funcionario/list-funcionario/list-funcionario.component';
import { NewFuncionarioComponent } from './funcionario/new-funcionario/new-funcionario.component';
import { ShowFuncionarioComponent } from './funcionario/show-funcionario/show-funcionario.component';
import { EditFuncionarioComponent } from './funcionario/edit-funcionario/edit-funcionario.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'equipamentos' , component: ListEquipamentoComponent},
  { path: 'equipamentos/new', component: FormEquipamentoComponent},
  { path: 'equipamentos/:id', component: ViewEquipamentoComponent},

  { path: 'funcionarios' , component: ListFuncionarioComponent},
  { path: 'funcionarios/new', component: NewFuncionarioComponent},
  { path: 'funcionarios/:id', component: ShowFuncionarioComponent},
  { path: 'funcionarios/edit/:id', component: EditFuncionarioComponent},
  { path: 'dashboard', component: DashboardComponent}



];
