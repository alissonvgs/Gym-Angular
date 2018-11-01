///<reference path="../shared/equipamento.ts"/>
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'app/api.service';
import { Equipamento} from 'app/equipamento/shared/equipamento';
import { EquipamentoService } from '../shared/equipamento.service';

@Component({
  selector: 'app-form-equipamento',
  templateUrl: './form-equipamento.component.html',
  styleUrls: ['./form-equipamento.component.css']
})
export class FormEquipamentoComponent implements OnInit {


  constructor(private EquipamentoService: EquipamentoService, private router: Router, private apiService: ApiService) { }

  id: number = 0;

  ngOnInit() {};

  onSubmit(form: any){

    this.EquipamentoService.add(JSON.stringify(
      new Equipamento(form.name, form.peso,
        form.descricao, form.tipo)))
      .subscribe((result) => {console.log(result);
                  alert('equipamento cadastrado!');
    this.router.navigate(['/equipamentos/cadastrarEquipamento/', result['id']]);
    },
    error => {alert('Um erro aconteceu, tente novamente');})
  }

}
