import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { ApiService } from 'app/api.service';
import { Cliente } from '../cliente';


@Component({
  selector: 'app-new-cliente',
  templateUrl: './new-cliente.component.html',
  styleUrls: ['./new-cliente.component.css']
})
export class NewClienteComponent implements OnInit {

  constructor(private router: Router, private clienteService: ClienteService, private apiService: ApiService) {}

  id: number = 0;

  ngOnInit() {};

  onSubmit(form: any) {

    this.clienteService.add(JSON.stringify(
      new Cliente(form.name, form.dataNascimento,
        form.cpf)))
      .subscribe((result) => {console.log(result);
                  alert('Cliente cadastrado!');
    this.router.navigate(['clientes/', result['id']]);
    },
    error => {alert('Um erro aconteceu, tente novamente'); });

  }

}
