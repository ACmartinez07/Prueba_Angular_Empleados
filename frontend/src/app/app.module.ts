import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearComponent } from './componentes/crear/crear.component';
import { ActualizarComponent } from './componentes/actualizar/actualizar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EmpleadoComponent } from './componentes/empleado/empleado.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CrearComponent,
    ActualizarComponent,
    InicioComponent,
    EmpleadoComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
