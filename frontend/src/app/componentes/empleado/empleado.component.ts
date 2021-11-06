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

  constructor(
    private router: ActivatedRoute,
    private dataService: DataBaseService,
    private _router: Router
  ) {
    this.router.params.subscribe((params) => {
      this.getEmpleado(params['id']);
    });
  }

  ngOnInit(): void {
    this.getEmpleado(this.router.snapshot.paramMap.get('id'));
  }
  getEmpleado(id: any) {
    this.dataService.getEmpleado(id).subscribe((empleado) => {
      this.empleado = empleado;

      console.log('empleado: ', this.empleado);
    });
  }

  eliminarEmpleado() {}

  actualizarEmpleado() {
    this._router.navigate([
      'actualizar',
      this.router.snapshot.paramMap.get('id'),
    ]);
  }

  regresar() {
    this._router.navigate(['inicio']);
  }
}
