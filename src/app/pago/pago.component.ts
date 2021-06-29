import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { DatosEnvioComponent } from '../datos-envio/datos-envio.component';
import { TotalService } from '../total.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})



export class PagoComponent implements OnInit {


  datosTarjeta = new FormGroup({
    
    nombreTitular : new FormControl('', Validators.required),
    nTarjeta : new FormControl('', Validators.required),
    fechaE : new FormControl('', Validators.required),
    fechaA : new FormControl('', Validators.required),
    cvv : new FormControl('', Validators.required),
  });

  
  datosCliente = this.serviceData.datosDeEnvio
  productosCantidad = this.serviceData.productosPorPagar
  productosCarrito  = this.serviceData.productosCarrito

  cantidad = 0;
  total = 0;

 
 
  constructor(private serviceData: TotalService){

  }

  guardarTarjeta(){

 

  }


  ngOnInit(): void {

   this.productosCantidad.forEach( x => {
        this.cantidad = x.cant + this.cantidad
        this.productosCarrito.forEach( y =>{
           if(x.codigo == y.codigo){
            this.total = x.cant * y.precio + this.total

           }
        })
   })

      }



}
