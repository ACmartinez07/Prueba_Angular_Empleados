import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataBaseService, empleado } from '../../servicio/data-base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
})
export class CrearComponent implements OnInit {
  empleado: empleado = {
    nombre: '',
    apellido: '',
    fechaNacimiento: new Date(),
    genero: '',
    fechaIngreso: '',
    estrato: 0,
  };

  constructor(private dataService: DataBaseService, private _router: Router) {}

  crear(forma: NgForm) {
    let genero = '';
    if (forma.value.genero == 1) {
      genero = 'Femenino';
    } else if (forma.value.genero == 2) {
      genero = 'Masculino';
    } else if (forma.value.genero == 3) {
      genero = 'Otro';
    } else if (forma.value.genero == 4) {
      genero = 'Prefiero no decirlo';
    }

    this.empleado = {
      nombre: forma.value.nombre,
      apellido: forma.value.apellido,
      fechaNacimiento: forma.value.nacimiento,
      genero: genero,
      fechaIngreso: forma.value.ingreso,
      estrato: Number(forma.value.estrato),
    };
    console.log(this.empleado);

    this.dataService.crearEmpleado(this.empleado);
    const prom1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        this._router.navigate(['inicio']);
      }, 500);
    });

    prom1
      .then((mensaje) => console.log(mensaje))
      .catch((err) => console.warn(err));
  }

  ngOnInit(): void {}
}
