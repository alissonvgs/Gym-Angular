import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css']
})
export class ListClienteComponent implements OnInit {
 

  message: string;
  clientes: Array<any> = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ClienteService,
    private api: ApiService) {
  }

   ngOnInit() {

     this.service.getAll('clientes').subscribe(data => {
      console.log(data);
      this.clientes = data;
    });

  }

  reload() {
    alert('Apagado com sucesso!');
    window.location.reload();
  }

  show(id) {
    this.service.clearMessage();
    this.router.navigate(['/clientes', id]);
    return false;
  }

  edit(id) {
    this.service.clearMessage();
    this.router.navigate(['/clientes/edit/', id]);
    return false;
  }

  destroy(id) {
    if (confirm('Tem certeza?')) {
      this.service.delete(+id);
      this.service.changeMessage('Cliente foi deletado');
      this.reload();
    }
    return false;
  }

}
