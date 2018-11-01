import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Academia } from './academia';
import { AppService } from '../app.service';
import { ApiService } from '../api.service';
import { RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AcademiaService implements OnInit {

  constructor(private appService: AppService, private apiService: ApiService) {}

  ngOnInit() {

  }
  add(academiaj): any {
    return this.apiService.post('academias', academiaj);
  }
  getById(id: any): Observable<any>{
    return this.apiService.getById('academias', id);
  }
  private handleError(error: any): Promise<Array<any>> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  delete(id: number): any {
    console.log('delete service');
    return this.apiService.delete('academias/', id);
  }
  update(newAcademia: Academia, id: number) {
    return this.apiService.put('academias/' + id , newAcademia);
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