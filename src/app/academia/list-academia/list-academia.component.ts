import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AcademiaService } from '../academia.service';
import { ApiService } from 'app/api.service';
import { Academia } from '../academia';

@Component({
  selector: 'app-list-academia',
  templateUrl: './list-academia.component.html',
  styleUrls: ['./list-academia.component.css']
})
export class ListAcademiaComponent implements OnInit {

  message: string;
  academias: Array<any> = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: AcademiaService,
    private api: ApiService) {
  }

   ngOnInit() {

     this.service.getAll('academias').subscribe(data => {
      console.log(data);
      this.academias = data;
    });

  }

  reload() {
    alert('Apagado com sucesso!');
    window.location.reload();
  }

  show(id) {
    this.service.clearMessage();
    this.router.navigate(['/academias', id]);
    return false;
  }

  edit(id) {
    this.service.clearMessage();
    this.router.navigate(['/academias/edit/', id]);
    return false;
  }

  destroy(id) {
    if (confirm('Tem certeza?')) {
      this.service.delete(+id);
      this.service.changeMessage('Academia foi deletado');
      this.reload();
    }
    return false;
  }

}