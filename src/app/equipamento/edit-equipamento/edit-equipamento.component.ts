import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipamentoService } from '../equipamento.service';
import { Equipamento } from '../equipamento';

@Component({
  selector: 'app-edit-equipamento',
  templateUrl: './edit-equipamento.component.html',
  styleUrls: ['./edit-equipamento.component.css']
})
export class EditEquipamentoComponent implements OnInit {

  private equipamento: Equipamento = null;
  private id: number;

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private equipamentoService: EquipamentoService ) { }

  ngOnInit() {
    this.route.params
    .subscribe(params => {const id = params['id'];
      if (id) {
        this.equipamentoService.getById(id).subscribe((equipamento: any) => {
          if (equipamento) {
            this.equipamento = equipamento;
            this.id = id;

          } else {
            console.log(`Equipamento with id '${id}' not found, returning to list`);
            this.router.navigate(['/equipamento']);
          }
        });
      };
    });
  }

  onSubmit(form: any) {
    this.equipamento.name = form.name;
    this.equipamento.peso = form.peso;
    this.equipamento.tipo = form.tipo;
    this.equipamentoService.update(this.equipamento, this.id)
    .subscribe((result) => {console.log(result);
      alert('Equipamento atualizado!');
      this.router.navigate(['/equipamentos/', result['id']]);
    }, error => { alert('Um erro aconteceu, tente novamente!'); });
  }

}
