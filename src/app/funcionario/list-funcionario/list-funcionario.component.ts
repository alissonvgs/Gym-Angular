import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { FuncionarioService } from '../funcionario.service';
import { ApiService } from 'app/api.service';
import { Funcionario } from '../funcionario';

@Component({
  selector: 'app-list-funcionario',
  templateUrl: './list-funcionario.component.html',
  styleUrls: ['./list-funcionario.component.css']
})
export class ListFuncionarioComponent implements OnInit {

  message: string;
  funcionarios: Array<any> = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: FuncionarioService,
    private api: ApiService) {
  }

   ngOnInit() {

     this.service.getAll('funcionarios').subscribe(data => {
      console.log(data);
      this.funcionarios = data;
    });

  }

  reload() {
    alert('Apagado com sucesso!');
    window.location.reload();
  }

  show(id) {
    this.service.clearMessage();
    this.router.navigate(['/funcionarios', id]);
    return false;
  }

  edit(id) {
    this.service.clearMessage();
    this.router.navigate(['/funcionarios/edit/', id]);
    return false;
  }

  destroy(id) {
    if (confirm('Tem certeza?')) {
      this.service.delete(+id);
      this.service.changeMessage('Funcionario foi deletado');
      this.reload();
    }
    return false;
  }

}
