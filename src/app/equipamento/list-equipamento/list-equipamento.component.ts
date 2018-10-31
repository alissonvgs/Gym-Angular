import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'app/api.service';

import { EquipamentoService } from '../shared/equipamento.service';
import { Equipamento } from '../shared/equipamento';

@Component({
  selector: 'app-list-equipamento',
  templateUrl: './list-equipamento.component.html',
  styleUrls: ['./list-equipamento.component.css']
})
export class ListEquipamentoComponent implements OnInit {

  message: string;
  equipamento: Array<any> = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: EquipamentoService,
    private api: ApiService

  ) { }
  
  ngOnInit() {
    this.service.getAll().subscribe(data => {
      this.equipamento = data;});
  }

  getEquipamento() {
    this.equipamento = this.service.getAll();
  }

  reload(){
    alert('Apagado com sucesso!');
    window.location.reload();
  }

  show(id) {
    this.service.clearMessage();
    this.router.navigate(['/equipamentos', id]);
    return false;
  }

  edit(id) {
    this.service.clearMessage();
    this.router.navigate(['/equipamentos/edit/', id]);
    return false;
  }

  destroy(id) {
    if (confirm('Tem certeza?')) {
      this.service.delete(+id);
      this.service.changeMessage('Equipamento foi deletado');
      this.reload();
    }
    return false;
  }


}
