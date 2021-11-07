import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../../servicio/data-base.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  empleados: any[] = [];
  constructor(private dataService: DataBaseService) {}

  Buscar(termino: string) {
    console.log(termino);

    this.dataService.getEmpleado(termino).subscribe((data: any) => {
      console.log(data);
      this.empleados = data;
    });
  }
  ngOnInit(): void {}
}
