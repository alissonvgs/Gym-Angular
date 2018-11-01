///<reference path="../equipamento.ts"/>
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipamentoService } from '../equipamento.service';
import { Equipamento } from '../equipamento';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-new-equipamento',
  templateUrl: './new-equipamento.component.html',
  styleUrls: ['./new-equipamento.component.css']
})
export class NewEquipamentoComponent implements OnInit{

  constructor(private router: Router, private equipamentoService: EquipamentoService, private apiService: ApiService) {}

  id: number = 0;

  ngOnInit() {};

  onSubmit(form: any) {

    this.equipamentoService.add(JSON.stringify(
      new Equipamento(form.name, form.peso,
        form.tipo, form.descricao)))
      .subscribe((result) => {console.log(result);
                  alert('Equipamento cadastrado!');
    this.router.navigate(['equipamentos/', result['id']]);
    },
    error => {alert('Um erro aconteceu, tente novamente');})

  }

}
