import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import { DatosEnvioComponent } from '../datos-envio/datos-envio.component';
import { TotalService } from '../total.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})



export class PagoComponent implements OnInit {


  nombreTitular = new FormControl('');
  numeroTarjeta = new FormControl('');
  fem = new FormControl('');
  fea = new FormControl('');
  fecvv = new FormControl('');
  
  datosCliente = this.serviceData.datosDeEnvio
  productosCantidad = this.serviceData.productosPorPagar
  productosCarrito  = this.serviceData.productosCarrito

  cantidad = 0;
  total = 0;

 
 
  constructor(private serviceData: TotalService){

  }

  guardarTarjeta(){

    this.nombreTitular = this.nombreTitular.value
    this.numeroTarjeta = this.numeroTarjeta.value
    this.fem = this.fem.value
    this.fea = this.fea.value
    this.fecvv = this.fecvv.value
    

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
