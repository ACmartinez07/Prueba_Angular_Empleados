import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../../servicio/data-base.service';
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
      console.log('empleados: ', empleado.nombre);
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
}
