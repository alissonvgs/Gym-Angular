import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-show-cliente',
  templateUrl: './show-cliente.component.html',
  styleUrls: ['./show-cliente.component.css']
})
export class ShowClienteComponent implements OnInit {

  public cliente: any = {};
  public id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clienteService: ClienteService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.clienteService.getById(id).subscribe((cliente: any) => {
          if (cliente) {
            this.cliente = cliente;
            this.id = id;
          } else {
            alert('Cliente não encontrado!');
            this.router.navigate(['/clientes']);
          }
        });
      };
  });
}
edit(){
  this.router.navigate(['/clientes/', this.id]);
  return false;
}

}

