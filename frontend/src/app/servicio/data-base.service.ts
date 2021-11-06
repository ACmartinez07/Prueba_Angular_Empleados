import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataBaseService {
  constructor(private http: HttpClient) {}

  getEmpleados() {
    return this.getQuery('empleados').pipe(map((empleados: any) => empleados));
  }

  getQuery(query: string) {
    const url = `http://localhost:3000/${query}`;

    return this.http.get(url);
  }
}
