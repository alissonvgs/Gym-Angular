import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {

  private cliente: Cliente = null;
  private id: number;

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private clienteService: ClienteService ) { }

  ngOnInit() {
    this.route.params
    .subscribe(params => {const id = params['id'];
      if (id) {
        this.clienteService.getById(id).subscribe((func: any) => {
          if (func) {
            this.cliente = func;
            this.id = id;

          } else {
            console.log(`Funcionario with id '${id}' not found, returning to list`);
            this.router.navigate(['/funcionarios']);
          }
        });
      };
    });
  }

  onSubmit(form: any) {
    this.cliente.name = form.name;
    this.cliente.dataNascimento = form.dataNascimento;
    this.cliente.cpf = form.cpf;
    this.clienteService.update(this.cliente, this.id)
    .subscribe((result) => {console.log(result);
      alert('Cliente atualizado!');
      this.router.navigate(['/clientes/', result['id']]);
    }, error => { alert('Um erro aconteceu, tente novamente!'); });
  }

}
