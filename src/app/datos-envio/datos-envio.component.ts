import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { TotalService } from '../total.service';

@Component({
  selector: 'app-datos-envio',
  templateUrl: './datos-envio.component.html',
  styleUrls: ['./datos-envio.component.css']
})
export class DatosEnvioComponent implements OnInit {

  constructor(public serviceData: TotalService){
  
  }

  ngOnInit(): void {
    
  }

}
