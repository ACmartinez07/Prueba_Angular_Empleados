import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataBaseService } from '../../servicio/data-base.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent implements OnInit {
  empleado: any = {};
  idEmpleado: string = '';
  fechaN: string = '';
  fechaI: string = '';
  edad: number = 0;
  date = new Date(Date.now());

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

  ngOnInit(): void {
    this.getEmpleado(this.router.snapshot.paramMap.get('id'));
  }

  getEmpleado(id: any) {
    this.dataService.getEmpleado(id).subscribe((empleado) => {
      this.empleado = empleado;
      this.fechaN = this.formatoFecha(this.empleado.fechaNacimiento);
      this.fechaI = this.formatoFecha(this.empleado.fechaIngreso);
      this.calcularEdad(this.empleado.fechaNacimiento);
    });
  }

  eliminarEmpleado() {
    this.dataService.eliminarEmpleado(this.idEmpleado);
    const prom1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        this._router.navigate(['inicio']);
      }, 500);
    });

    prom1
      .then((mensaje) => console.log(mensaje))
      .catch((err) => console.warn(err));
  }

  actualizarEmpleado() {
    this._router.navigate([`actualizar/${this.idEmpleado}`]);
  }

  calcularEdad(fechaN: any) {
    let date1 = new Date(fechaN);
    let añoN = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    let añoActual = Date.UTC(
      this.date.getFullYear(),
      this.date.getMonth(),
      this.date.getDate()
    );
    const dia = 1000 * 60 * 60 * 24;

    const diferencia = (añoActual - añoN) / dia;
    this.edad = diferencia / 365;
  }

  formatoFecha(fecha: any) {
    const fechaFormatear = new Date(fecha);
    return (
      fechaFormatear.getDate() +
      1 +
      ' - ' +
      (fechaFormatear.getMonth() + 1) +
      ' - ' +
      fechaFormatear.getFullYear()
    );
  }

  regresar() {
    this._router.navigate(['inicio']);
  }
}
