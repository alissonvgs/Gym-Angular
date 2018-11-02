import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { AcademiaService } from '../academia.service';
import { Academia } from '../academia';

@Component({
  selector: 'app-show-academia',
  templateUrl: './show-academia.component.html',
  styleUrls: ['./show-academia.component.css']
})
export class ShowAcademiaComponent implements OnInit{

  public academia: any = {};
  public id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private academiaService: AcademiaService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.academiaService.getById(id).subscribe((academia: any) => {
          if (academia) {
            this.academia = academia;
            this.id = id;
          } else {
            alert('Academia não encontrado!');
            this.router.navigate(['/academias']);
          }
        });
      };
  });
}
edit(){
  this.router.navigate(['/academias/', this.id]);
  return false;
}

}