import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcademiaService } from '../academia.service';
import { Academia } from '../academia';

@Component({
  selector: 'app-edit-academia',
  templateUrl: './edit-academia.component.html',
  styleUrls: ['./edit-academia.component.css']
})
export class EditAcademiaComponent implements OnInit {

  private academia: Academia = null;
  private id: number;

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private academiaService: AcademiaService ) { }

  ngOnInit() {
    this.route.params
    .subscribe(params => {const id = params['id'];
      if (id) {
        this.academiaService.getById(id).subscribe((academia: any) => {
          if (academia) {
            this.academia = academia;
            this.id = id;

          } else {
            console.log(`Academia with id '${id}' not found, returning to list`);
            this.router.navigate(['/academia']);
          }
        });
      };
    });
  }

  onSubmit(form: any) {
    this.academia.id = form.id;
    this.academia.name = form.name;
    this.academia.contato = form.contato;
    this.academia.endereco = form.endereco;
    this.academia.update(this.academia, this.id)
    .subscribe((result) => {console.log(result);
      alert('Academia atualizado!');
      this.router.navigate(['/academias/', result['id']]);
    }, error => { alert('Um erro aconteceu, tente novamente!'); });
  }

}