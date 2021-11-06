import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataBaseService, empleado } from '../../servicio/data-base.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css'],
})
export class ActualizarComponent implements OnInit {
  empleado: empleado = {
    nombre: '',
    apellido: '',
    fechaNacimiento: new Date(),
    genero: '',
    fechaIngreso: '',
    estrato: 0,
  };
  idEmpleado: string = '';

  constructor(
    private router: ActivatedRoute,
    private dataService: DataBaseService,
    private _router: Router
  ) {
    this.router.params.subscribe((params) => {
      this.idEmpleado = params['id'];
      this.getEmpleado(params['id']);
    });
  }

  getEmpleado(id: any) {
    this.dataService.getEmpleado(id).subscribe((empleado) => {
      this.empleado = empleado;
      console.log(this.empleado);
    });
  }

  actualizar(forma: NgForm) {
    let genero = '';
    if (forma.value.genero == 1) {
      genero = 'Femenino';
    } else if (forma.value.genero == 2) {
      genero = 'Masculino';
    }

    this.empleado = {
      nombre: forma.value.nombre,
      apellido: forma.value.apellido,
      fechaNacimiento: forma.value.nacimiento,
      genero: genero,
      fechaIngreso: forma.value.ingreso,
      estrato: Number(forma.value.estrato),
    };

    this.dataService.actualizarEmpleado(this.empleado, this.idEmpleado);
    const prom1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        this._router.navigate([`empleado/${this.idEmpleado}`]);
      }, 500);
    });

    prom1
      .then((mensaje) => console.log(mensaje))
      .catch((err) => console.warn(err));
  }

  ngOnInit(): void {
    this.getEmpleado(this.router.snapshot.paramMap.get('id'));
  }
}
