import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Equipamento } from './equipamento';
import { AppService } from '../app.service';
import { ApiService } from '../api.service';
import { RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EquipamentoService implements OnInit {

  constructor(private appService: AppService, private apiService: ApiService) {}

  ngOnInit() {

  }

  add(equipamentoj): any {

    return this.apiService.post('equipamentos', equipamentoj);
  }

  getById(id: any): Observable<any>{

    return this.apiService.getById('equipamentos', id);

  }

  private handleError(error: any): Promise<Array<any>> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
    }

  delete(id: number): any {
    console.log('delete service');
    return this.apiService.delete('equipamentos/', id);
  }

  update(newEquipamento: Equipamento, id: number) {
<<<<<<< HEAD:src/app/equipamento/equipamento.service.ts
    return this.apiService.put('equipamentos/' + id , newEquipamento);
}
=======
    return this.apiService.put('equipamentos' + id, newEquipamento);
  }
>>>>>>> origin/master:src/app/equipamento/equipamento.service.ts


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
