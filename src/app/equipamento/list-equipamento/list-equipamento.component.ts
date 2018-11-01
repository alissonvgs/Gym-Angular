import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { EquipamentoService } from '../equipamento.service';
import { ApiService } from 'app/api.service';
import { Equipamento } from '../equipamento';

@Component({
  selector: 'app-list-equipamento',
  templateUrl: './list-equipamento.component.html',
  styleUrls: ['./list-equipamento.component.css']
})
export class ListEquipamentoComponent implements OnInit {

  message: string;
  equipamentos: Array<any> = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: EquipamentoService,
    private api: ApiService) {
  }

   ngOnInit() {

     this.service.getAll('equipamentos').subscribe(data => {
      console.log(data);
      this.equipamentos = data;
    });

  }

  reload() {
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
<<<<<<< HEAD
=======

>>>>>>> origin/master
}
