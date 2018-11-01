import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { RequestOptions, Headers, RequestMethod, RequestOptionsArgs } from '@angular/http';

@Injectable()
export class ApiService {

  url: string = 'http://localhost:4200/api/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private httpClient: HttpClient) {
  }

  getAll(endpoint: any): Observable<any> {
    return this.httpClient.get(this.url + endpoint);
  }

  post(endpoint: any, body: any){

    console.log(body);
    return this.httpClient.post(this.url + endpoint, body, this.httpOptions);
  }

  put(endpoint: any, body: any): Observable<any>{
    return this.httpClient.put(this.url + endpoint, body, this.httpOptions);
  }
  getById(endpoint: any, id: any): Observable<any>{
    return this.httpClient.get(this.url + endpoint + '/' + id);
  }

  delete(endpoint: any, id: any): any{

    const url = this.httpClient.delete(this.url + endpoint + id, {headers: this.httpOptions[0]}).subscribe((result) => {
      console.log(result);
    }, error => console.log('oops', error));
    return url;
  }
}
