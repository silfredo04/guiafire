import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  constructor(private http:HttpClient) { }

  getGaleria():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }

  getGaleriaDetalles(id):Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/photos/'+id);
  }
}
