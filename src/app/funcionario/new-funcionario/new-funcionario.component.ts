///<reference path="../funcionario.ts"/>
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionarioService } from '../funcionario.service';
import { Funcionario } from '../funcionario';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-new-funcionario',
  templateUrl: './new-funcionario.component.html',
  styleUrls: ['./new-funcionario.component.css']
})
export class NewFuncionarioComponent implements OnInit{

  constructor(private router: Router, private funcionarioService: FuncionarioService, private apiService: ApiService) {}

  id: number = 0;

  ngOnInit() {};

  onSubmit(form: any) {

    this.funcionarioService.add(JSON.stringify(
      new Funcionario(form.name, form.dataNascimento, form.cpf, form.telefone, form.email, form.endereco, form.salario, form.categoria)))
      .subscribe((result) => {console.log(result);
                  alert('Funcionario cadastrado!');
    this.router.navigate(['funcionarios/', result['id']]);
    },
    error => {alert('Um erro aconteceu, tente novamente');})

  }

}
