import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { AppService } from '../app.service';
import { ApiService } from '../api.service';
import { RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Cliente } from './cliente';

@Injectable()
export class ClienteService implements OnInit {

  constructor(private appService: AppService, private apiService: ApiService) {}
  ngOnInit() {
  }
  add(clientej): any {

    return this.apiService.post('clientes', clientej);
  }

  getById(id: any): Observable<any>{

    return this.apiService.getById('clientes', id);

  }

  private handleError(error: any): Promise<Array<any>> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
    }

  delete(id: number): any {
    console.log('delete service');
    return this.apiService.delete('clientes/', id);
  }

  update(newCliente: Cliente, id: number) {
    return this.apiService.put('clientes' + id, newCliente);
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