import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Funcionario } from './funcionario';
import { AppService } from '../app.service';
import { ApiService } from '../api.service';
import { RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FuncionarioService implements OnInit {

  constructor(private appService: AppService, private apiService: ApiService) {}

  ngOnInit() {

  }

  add(funcionarioj): any {

    return this.apiService.post('funcionarios', funcionarioj);
  }

  getById(id: any): Observable<any>{

    return this.apiService.getById('funcionarios', id);

  }

  private handleError(error: any): Promise<Array<any>> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
    }

  delete(id: number): any {
    console.log('delete service');
    return this.apiService.delete('funcionarios/', id);
  }

  update(newFuncionario: Funcionario, id: number) {
    return this.apiService.put('funcionarios/' + id , newFuncionario);
  }


  getAll(endpoint: any): any {
    return this.apiService.getAll(endpoint);
  }

  changeMessage(message: string) {
    this.appService.changeMessage(message);
  }

  clearMessage() {
    this.appService.clearMessage();
  }
}
