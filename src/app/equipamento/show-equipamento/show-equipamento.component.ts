import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { EquipamentoService } from '../equipamento.service';
import { Equipamento } from '../equipamento';

@Component({
  selector: 'app-show-equipamento',
  templateUrl: './show-equipamento.component.html',
  styleUrls: ['./show-equipamento.component.css']
})
export class ShowEquipamentoComponent implements OnInit{

  public equipamento: any = {};
  public id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private equipamentoService: EquipamentoService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
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
  this.router.navigate(['/equipamentos/', this.id]);
  return false;
}

}
