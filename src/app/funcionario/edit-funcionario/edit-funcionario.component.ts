import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from '../funcionario.service';
import { Funcionario } from '../funcionario';

@Component({
  selector: 'app-edit-funcionario',
  templateUrl: './edit-funcionario.component.html',
  styleUrls: ['./edit-funcionario.component.css']
})
export class EditFuncionarioComponent implements OnInit {

  private funcionario: Funcionario = null;
  private id: number;

  constructor(private router: Router, private route: ActivatedRoute, private funcionarioService: FuncionarioService ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.funcionarioService.getById(id).subscribe((func: any) => {
          if (func) {
            this.funcionario = func;
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
    this.funcionario.name = form.name;
    this.funcionario.dataNascimento = form.dataNascimento;
    this.funcionario.cpf = form.cpf;
    this.funcionarioService.update(this.funcionario, this.id).subscribe((result) => {
      console.log(result);
      alert('Funcionario atualizado!');
      this.router.navigate(['/funcionarios/', result['id']]);
    }, error => { alert('Um erro aconteceu, tente novamente!'); });
  }

}
