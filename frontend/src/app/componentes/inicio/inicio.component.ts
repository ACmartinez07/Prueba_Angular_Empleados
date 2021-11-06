import { Component, OnInit } from '@angular/core';
import { DataBaseService, Empleado } from '../../servicio/data-base.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  Empleados: Empleado[] = [];

  constructor(private dataService: DataBaseService) {}

  ngOnInit(): void {
    this.Empleados = this.dataService.getEmpleados();
  }
}
