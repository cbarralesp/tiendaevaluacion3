import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Router} from '@angular/router';

import { TotalService } from '../total.service';

@Component({
  selector: 'app-datos-envio',
  templateUrl: './datos-envio.component.html',
  styleUrls: ['./datos-envio.component.css']
})
export class DatosEnvioComponent implements OnInit {

  alertUser!: string;



  constructor(private router: Router, private serviceData: TotalService) { }

  nombre = new FormControl('');
  apellido = new FormControl('');
  direccion =  new FormControl('');
  region = new FormControl('');
  codigoP = new FormControl('');
  comuna = new FormControl('');
  email = new FormControl('');
  fecha = new FormControl('');
  hora = new FormControl('');
  obs = new FormControl('');


      

ngOnInit(): void {
    
                  }

guardar(){

  if(this.nombre.value == "" && this.apellido.value == "" && this.direccion.value == ""
  && this.region.value == "" && this.codigoP.value == ""  && this.comuna.value == ""
  && this.email.value == ""  && this.hora.value == ""     && this.obs.value == ""){
    this.alertUser = "Debe completar los campos";}

  this.serviceData.datosDeEnvio = {nombre: this.nombre.value, apellido: this.apellido.value,
    direccion: this.direccion.value, region: this.region.value, codigoP: this.codigoP.value,
    comuna: this.comuna.value, email: this.email.value, fecha: this.fecha.value, hora: this.hora.value, 
    obs: this.obs.value }
    this.router.navigate(['pago']);
  console.log(this.serviceData.datosDeEnvio)

}
}
