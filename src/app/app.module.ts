import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagoComponent } from './pago/pago.component';
import { ProductosComponent } from './productos/productos.component';
import { DatosEnvioComponent } from './datos-envio/datos-envio.component';
import { Pagina2Component } from './pagina2/pagina2.component';


const routes: Routes = [{
    path:'',
    component: LoginComponent
},
{
    path:'productos',
    component: ProductosComponent
},
{
    path:'pago',
    component: PagoComponent
},
{
  path:'datosEnvio',
  component: DatosEnvioComponent
},
{
  path:'pagina2',
  component: Pagina2Component
}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagoComponent,
    ProductosComponent,
    DatosEnvioComponent,
    Pagina2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [RouterModule.forRoot(routes)],
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
