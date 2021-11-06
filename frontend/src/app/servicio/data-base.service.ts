import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataBaseService {
  constructor(private http: HttpClient) {}

  getEmpleados() {
    return this.getQuery('empleados').pipe(map((empleados: any) => empleados));
  }

  getEmpleado(id: string) {
    return this.getQuery(`empleado/${id}`).pipe(
      map((empleado: any) => empleado)
    );
  }

  getQuery(query: string) {
    const url = `http://localhost:3000/${query}`;

    return this.http.get(url);
  }

  crearEmpleado(empleado: empleado) {
    this.http
      .post('http://localhost:3000/empleado', empleado)
      .subscribe((res) => {
        console.log('empleado creado:', res);
      });
  }

  actualizarEmpleado(empleado: empleado, id: string) {
    this.http
      .put(`http://localhost:3000/empleado/${id}`, empleado)
      .subscribe((res) => {
        console.log('empleado creado:', res);
      });
  }

  eliminarEmpleado(id: string) {
    this.http
      .delete(`http://localhost:3000/empleado/${id}`)
      .subscribe((res) => {
        console.log('empleado eliminado:', res);
      });
  }
}

export interface empleado {
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;
  genero: string;
  fechaIngreso: string;
  estrato: number;
}
