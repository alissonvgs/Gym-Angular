import { Injectable } from '@angular/core';
import { AppService } from 'app/app.service';
import { ApiService } from 'app/api.service';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private appService: AppService, private apiService: ApiService) {}
  ngOnInit() {
  }
  add(cliente): any {

    return this.apiService.post('clientes', cliente);
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
    return this.apiService.delete('clientes', id);
  }

  update(newCliente: Cliente, id: number) {
    return this.apiService.put('clientes', id);
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