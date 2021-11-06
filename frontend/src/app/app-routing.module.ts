import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CrearComponent } from './componentes/crear/crear.component';
import { ActualizarComponent } from './componentes/actualizar/actualizar.component';
import { EmpleadoComponent } from './componentes/empleado/empleado.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'crear', component: CrearComponent },
  { path: 'actualizar', component: ActualizarComponent },
  { path: 'empleado/:id', component: EmpleadoComponent },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
