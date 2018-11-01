import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { FuncionarioService } from '../funcionario.service';
import { Funcionario } from '../funcionario';

@Component({
  selector: 'app-show-funcionario',
  templateUrl: './show-funcionario.component.html',
  styleUrls: ['./show-funcionario.component.css']
})
export class ShowFuncionarioComponent implements OnInit {

  public funcionario: any = {};
  public id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private funcionarioService: FuncionarioService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.funcionarioService.getById(id).subscribe((funcionario: any) => {
          if (funcionario) {
            this.funcionario = funcionario;
            this.id = id;
          } else {
            alert('Funcionario não encontrado!');
            this.router.navigate(['/funcionarios']);
          }
        });
      };
    });
  }
  edit() {
    this.router.navigate(['/funcionarios/', this.id]);
    return false;
  }

}
