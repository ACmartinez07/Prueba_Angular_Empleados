import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataBaseService, empleado } from '../../servicio/data-base.service';

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

  constructor(private dataService: DataBaseService) {}

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
  }

  ngOnInit(): void {}
}
