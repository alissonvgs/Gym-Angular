///<reference path="../academia.ts"/>
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcademiaService } from '../academia.service';
import { Academia } from '../academia';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-new-academia',
  templateUrl: './new-academia.component.html',
  styleUrls: ['./new-academia.component.css']
})
export class NewAcademiaComponent implements OnInit{

  constructor(private router: Router, private academiaService: AcademiaService, private apiService: ApiService) {}

  id: number = 0;

  ngOnInit() {};

  onSubmit(form: any) {

    this.academiaService.add(JSON.stringify(
      new Academia(form.id, form.name, form.contato, form.endereco)))
      .subscribe((result) => {console.log(result);
                  alert('Academia cadastrado!');
    this.router.navigate(['academias/', result['id']]);
    },
    error => {alert('Um erro aconteceu, tente novamente');})

  }
}