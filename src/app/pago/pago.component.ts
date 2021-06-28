import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { TotalService } from '../total.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  constructor(public serviceData: TotalService){
   
  }

  ngOnInit(): void {
  }

}
