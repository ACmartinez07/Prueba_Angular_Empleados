import { Component, OnInit } from '@angular/core';
import { DataBaseService, empleado } from '../../servicio/data-base.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  empleados: any = {};
  error: boolean = false;

  constructor(private dataService: DataBaseService, private router: Router) {}
  ngOnInit(): void {
    this.empleados = this.getEmpleados();
  }

  getEmpleados() {
    this.dataService.getEmpleados().subscribe((data) => {
      this.empleados = data;
    });
  }

  obtenerID(idx: number) {
    let id = this.empleados[idx]._id;
    this.verEmpleado(id);
  }

  verEmpleado(idx: string) {
    this.router.navigate(['empleado', idx]);
  }

  obtenerNombreC(idx: number) {
    let nombre = this.empleados[idx].nombre;
    let apellido = this.empleados[idx].apellido;
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

  formatoFecha(id: number) {
    const fechaFormatear = new Date(this.empleados[id].fechaNacimiento);
    return (
      fechaFormatear.getDate() +
      1 +
      ' - ' +
      (fechaFormatear.getMonth() + 1) +
      ' - ' +
      fechaFormatear.getFullYear()
    );
  }

  filtrarEmpleados(forma: NgForm) {
    console.log(forma);

    if (forma.value.filtro == 1) {
      this.filtrarNombre(forma.value.termino);
    } else if (forma.value.filtro == 2) {
      this.filtrarApellido(forma.value.termino);
    }
  }

  filtrarNombre(findNombre: any) {
    this.error = false;
    this.dataService.getEmpleados().subscribe((data) => {
      let empleado = data;

      this.empleados = empleado.filter((m: { nombre: any }) =>
        m.nombre.toLowerCase().includes(findNombre.toLowerCase())
      );
      if (this.empleados == '') {
        this.error = true;
      }
    });
  }

  filtrarApellido(findApellido: string) {
    this.error = false;
    this.dataService.getEmpleados().subscribe((data) => {
      let empleado = data;

      this.empleados = empleado.filter((m: { apellido: any }) =>
        m.apellido.toLowerCase().includes(findApellido.toLowerCase())
      );
      if (this.empleados == '') {
        this.error = true;
      }
    });
  }
}
