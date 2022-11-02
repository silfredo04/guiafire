import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CantanteService {

  constructor(private http:HttpClient) { }
  getCantantes():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getDetalles(id):Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+id);
  }
}
