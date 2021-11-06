import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../../servicio/data-base.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  empleado: any = {};

  constructor(private dataService: DataBaseService) {}

  getEmpleados() {
    this.dataService.getEmpleados().subscribe((empleado) => {
      this.empleado = empleado;
      console.log('empleados: ', empleado);
    });
  }

  ngOnInit(): void {
    this.empleado = this.getEmpleados();
  }
}
