import { Component, OnInit } from '@angular/core';
import { DataBaseService, empleado } from '../../servicio/data-base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  empleado: any = {};

  constructor(private dataService: DataBaseService, private router: Router) {}

  getEmpleados() {
    this.dataService.getEmpleados().subscribe((empleado) => {
      this.empleado = empleado;
    });
  }

  obtenerID(idx: number) {
    let id = this.empleado[idx]._id;
    this.verEmpleado(id);
  }

  verEmpleado(idx: string) {
    this.router.navigate(['empleado', idx]);
  }

  ngOnInit(): void {
    this.empleado = this.getEmpleados();
  }

  obtenerNombreC(idx: number) {
    let nombre = this.empleado[idx].nombre;
    let apellido = this.empleado[idx].apellido;
    let dict = this.conteo(nombre + apellido);
    console.log(JSON.stringify(dict, null, '\n'));

    return JSON.stringify(dict, null, '\n');
  }

  conteo(nombreC: string) {
    let n = nombreC.length;
    let dict = {};
    let a = nombreC.toLowerCase().split('');
    this.recursividad(0, a, n, dict);
    console.log(dict.toString());

    return dict;
  }

  recursividad(i: number, nombreC: string[], length: number, dict: any) {
    if (i < length) {
      console.log(nombreC[i]);
      if (nombreC[i] in dict) {
        ++dict[nombreC[i]];
      } else {
        dict[nombreC[i]] = 1;
      }
      this.recursividad(i + 1, nombreC, length, dict);
    }
    return 0;
  }
}
