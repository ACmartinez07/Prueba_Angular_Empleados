import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataBaseService {
  private Empleados: Empleado[] = [
    {
      nombre: 'Andres',
      apellido: 'Martinez',
      fechaNacimiento: '3-7-2002',
      genero: 'masculino',
      fechaIngreso: '11-6-2021',
      estrato: 2,
    },
    {
      nombre: 'Sebastian',
      apellido: 'Andradde',
      fechaNacimiento: '6-12-1998',
      genero: 'masculino',
      fechaIngreso: '11-6-2021',
      estrato: 3,
    },
    {
      nombre: 'Jholman',
      apellido: 'Reina',
      fechaNacimiento: '10-20-1999',
      genero: 'masculino',
      fechaIngreso: '11-6-2021',
      estrato: 3,
    },
    {
      nombre: 'Alejandra',
      apellido: 'Gualdron',
      fechaNacimiento: '6-16-1999',
      genero: 'femenino',
      fechaIngreso: '11-6-2021',
      estrato: 3,
    },
  ];
  constructor() {}

  getEmpleados(): Empleado[] {
    return this.Empleados;
  }
}

export interface Empleado {
  nombre: string;
  apellido: string;
  fechaNacimiento: string;
  genero: string;
  fechaIngreso: string;
  estrato: number;
}
