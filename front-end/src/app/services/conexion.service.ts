import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private url = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  // ======== Users ========
  getUsers(): Observable<any> {
    return this.http.get(this.url);
  }
  getUser(Id: number): Observable<any> {
    return this.http.get(this.url + '/' + Id);
  }
  postUser(datos: any): Observable<any> {
    return this.http.post(this.url, datos);
  }
  deleteUser(Id: number): Observable<any> {
    return this.http.delete(this.url + "/" + Id);
  }
}
