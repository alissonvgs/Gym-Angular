import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import {EquipamentoService} from '../shared/equipamento.service';
import { Equipamento } from '../shared/equipamento';

@Component({
  selector: 'app-view-equipamento',
  templateUrl: './view-equipamento.component.html',
  styleUrls: ['./view-equipamento.component.css']
})
export class ViewEquipamentoComponent implements OnInit {

  public equipamento: any = {};
  public id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private equipamentoService: EquipamentoService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      const id = params['id'];
      if (id) {
        this.equipamentoService.getById(id).subscribe((equipamento: any) => {
          if (equipamento) {
            this.equipamento = equipamento;
            this.id = id;
          } else {
            alert('Equipamento não encontrado!');
            this.router.navigate(['/equipamentos']);
          }
        });
      };
    });
  }
  edit(){
    this.router.navigate(['/equipamentos/edit/', this.id]);
    return false;
  }

}
