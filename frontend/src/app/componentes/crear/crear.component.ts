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
    fechaIngreso: new Date(),
    estrato: 0,
  };
  error: boolean = false;

  constructor(private dataService: DataBaseService, private _router: Router) {}

  crear(forma: NgForm) {
    if (forma.invalid) {
      this.error = true;
      return;
    }
    this.empleado = {
      nombre: forma.value.nombre,
      apellido: forma.value.apellido,
      fechaNacimiento: new Date(forma.value.nacimiento),
      genero: forma.value.genero,
      fechaIngreso: new Date(forma.value.ingreso),
      estrato: Number(forma.value.estrato),
    };

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
