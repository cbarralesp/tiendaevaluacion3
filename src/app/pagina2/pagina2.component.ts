import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TotalService } from '../total.service';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {
  a = [];
  Noencontrado:number = 0;
  ver:any= {};
  totalDinero = 0;
  totalCarrito = 0;
  hola = ['hola','como'];
  clave = new FormControl('');
  cantidad = new FormControl();
  productosCarrito: any[] = []; // Array para el carrito
  productosCantidad = [{
                        codigo: 0,
                        cant: 0,
                      }
  ];
  productos: any[] = [];
  productosActual1 = [   // Array para items en stock
    {
      codigo: 211411, nombre: 'Piano digital Roland FP-10 ', precio: 550000,
      descripcion: 'Cuando llegue la inspiración, siéntese en el último modelo de la reconocida serie de pianos de Roland FP El FP-10 de nivel de entrada.', img: '../../assets/tarjetas/piano1.jpg',
      tags : "piano"
    },
    {
      codigo: 1108562, nombre: 'Piano digital Kawai  AC60 ', precio: 719900,
      descripcion: 'Los últimos pianos digitales de la serie CN de Kawai proporcionan un teclado realista de tamaño completo, hermosos sonidos de piano de cola y salidas de audífono que permiten la práctica silenciosa en cualquier momento del día.', img: '../../assets/tarjetas/piano2.jpg',
      tags : "piano"
    },
    {
      codigo: 211352, nombre: 'Batería electrónica Roland TD', precio: 990000,
      descripcion: 'La TD-1DMK te ofrece una gratificante experiencia musical en un kit compacto y transportable. Este módulo es sencillo pero potente, e incluye diversos kits de percusión expresivos, conectados a los pads de malla doble de Roland para la caja y los toms. Estos pads consiguen un «rebote» realista gracias a las dos capas de malla, que hacen que la batería rebote después de golpear la batería, como en un kit acústico.', img: '../../assets/tarjetas/bateria1.jpg',
      tags : "bateria,drums"
    },
    {
      codigo: 206503, nombre: 'Batería para niño', precio: 402000,
      descripcion: 'POWERDRUMS nos muestra su innovadora serie de percusiones y baterías económicas, enfocadas para el estudio. Diseñadas y fabricadas al mejor estilo de las grandes marcas a nivel mundial. Batería para niño. Incluye pedal de bombo y sillín...', img: '../../assets/tarjetas/bateria2.jpg',
      tags : "niño,bateria"
    },
    {
      codigo: 1097512, nombre: 'Guitarra electroacústica Takamine', precio: 130000,
      descripcion: 'Guitarra electro acustica', img: '../../assets/tarjetas/gt2.jpg',
      tags : "guitarra"
    },
    {
      codigo: 211479, nombre: 'Guitarra electroacústica ', precio: 85990,
      descripcion: 'GTR acustica', img: '../../assets/tarjetas/gt3.jpg',
      tags : "guitarra"
    },

    {
      codigo: 210109, nombre: 'Secuenciador de bajo Roland TB-3 ', precio: 334900,
      descripcion: 'LA MAGIA DEL TB-303 CON NUEVOS SONIDOS Y CARACTERÍSTICAS MODERNAS', img: '../../assets/tarjetas/tc1.jpg',
      tags : "Teclado"
    },
    {
      codigo: 1096284, nombre: 'Mini atril para guitarra', precio: 29990,
      descripcion: 'El GS402BB es un mini stand para guitarra eléctrica', img: '../../assets/tarjetas/atril1.jpg',
      tags : "atril"
    },
  ];

  productosActual = [   // Array para items en stock
    { id:0,
      codigo: 211411, nombre: 'Piano digital Roland FP-10 ', precio: 550000,
      descripcion: 'Cuando llegue la inspiración, siéntese en el último modelo de la reconocida serie de pianos de Roland FP El FP-10 de nivel de entrada.', img: '../../assets/tarjetas/piano1.jpg',
      tags : "piano"
    },
    { id:1,
      codigo: 1108562, nombre: 'Piano digital Kawai  AC60 ', precio: 719900,
      descripcion: 'Los últimos pianos digitales de la serie CN de Kawai proporcionan un teclado realista de tamaño completo, hermosos sonidos de piano de cola y salidas de audífono que permiten la práctica silenciosa en cualquier momento del día.', img: '../../assets/tarjetas/piano2.jpg',
      tags : "piano"
    },
    { id:2,
      codigo: 211352, nombre: 'Batería electrónica Roland TD', precio: 990000,
      descripcion: 'La TD-1DMK te ofrece una gratificante experiencia musical en un kit compacto y transportable. Este módulo es sencillo pero potente, e incluye diversos kits de percusión expresivos, conectados a los pads de malla doble de Roland para la caja y los toms. Estos pads consiguen un «rebote» realista gracias a las dos capas de malla, que hacen que la batería rebote después de golpear la batería, como en un kit acústico.', img: '../../assets/tarjetas/bateria1.jpg',
      tags : "bateria,drums"
    },
    { id:3,
      codigo: 206503, nombre: 'Batería para niño', precio: 402000,
      descripcion: 'POWERDRUMS nos muestra su innovadora serie de percusiones y baterías económicas, enfocadas para el estudio. Diseñadas y fabricadas al mejor estilo de las grandes marcas a nivel mundial. Batería para niño. Incluye pedal de bombo y sillín...', img: '../../assets/tarjetas/bateria2.jpg',
      tags : "niño,bateria"
    },
    { id:4,
      codigo: 1097512, nombre: 'Guitarra electroacústica Takamine', precio: 130000,
      descripcion: 'Guitarra electro acustica', img: '../../assets/tarjetas/gt2.jpg',
      tags : "guitarra"
    },
    { id:5,
      codigo: 211479, nombre: 'Guitarra electroacústica ', precio: 85990,
      descripcion: 'GTR acustica', img: '../../assets/tarjetas/gt3.jpg',
      tags : "guitarra"
    },

    { id:6,
      codigo: 210109, nombre: 'Secuenciador de bajo Roland TB-3 ', precio: 334900,
      descripcion: 'LA MAGIA DEL TB-303 CON NUEVOS SONIDOS Y CARACTERÍSTICAS MODERNAS', img: '../../assets/tarjetas/tc1.jpg',
      tags : "Teclado"
    },
    { id:7,
      codigo: 1096284, nombre: 'Mini atril para guitarra', precio: 29990,
      descripcion: 'El GS402BB es un mini stand para guitarra eléctrica', img: '../../assets/tarjetas/atril1.jpg',
      tags : "atril"
    },
  ];
  productosCarritoActual: any;

  
  constructor(public serviceData: TotalService, public router: Router){
   
  }
  ngOnInit(){
  }

  productoSeleccionado:any[] = []

  mostrarProducto(i:any){
    this.ver = {};
     this.ver =  this.productosActual[i];
     
    console.log(this.ver);
  }

  productoModal(i: any){
      this.productoSeleccionado = []
      this.productoSeleccionado.push(this.productosActual[i])
  }

  agregarProducto(i: any){
    if(this.productosCarrito.includes(this.productosActual[i])){
      console.log("Ya tiene el producto")
      for(let j = 0;j<this.productosCantidad.length;j++){
        if(this.productosActual[i].codigo == this.productosCantidad[j].codigo){
          this.productosCantidad[j].cant+=1;
        }
      }
      this.totalDinero+=this.productosActual[i].precio;
      localStorage.setItem("total",JSON.stringify(this.totalDinero));
      Swal.fire(
        'Sumado al carrito!',
        'Sigue comprando!',
        'success'
      )
    }
    else{
      console.log("No tiene el producto");
      
      this.productosCarrito.push(this.productosActual[i]);
      this.productosCantidad.push({codigo: this.productosActual[i].codigo, cant: 1});
      this.totalDinero+=this.productosActual[i].precio;
      localStorage.setItem("total",JSON.stringify(this.totalDinero));
      Swal.fire(
        'Agregado al carrito!',
        'Tenemos lo mejor para ti!',
        'success'
      )
     
    }
    localStorage.setItem("carrito",JSON.stringify(this.productosCarrito));
    localStorage.setItem("cantidad",JSON.stringify(this.productosCantidad));

   
  }

  eliminarProducto(cod: any){
    for(let i = 0;i<this.productosCarrito.length;i++){
      if(this.productosCarrito[i].codigo == cod){
        this.totalDinero-=(this.productosCarrito[i].precio*this.productosCantidad[i+1].cant);
        localStorage.setItem("total",JSON.stringify(this.totalDinero))
        this.productosCarrito.splice(i,1);
        this.productosCantidad.splice(i+1,1);
      }
    }
    localStorage.setItem("carrito",JSON.stringify(this.productosCarrito));
    localStorage.setItem("cantidad",JSON.stringify(this.productosCantidad));
  }

  actualizarProducto(cod: any){
    for(let i = 0;i<this.productosCarrito.length;i++){
      if(this.productosCarrito[i].codigo == cod){
        this.totalDinero-=(this.productosCarrito[i].precio*this.productosCantidad[i+1].cant);
        this.productosCantidad[i+1].cant = Number(this.cantidad.value);
        this.totalDinero+=(this.productosCarrito[i].precio*this.productosCantidad[i+1].cant);
        localStorage.setItem("total",JSON.stringify(this.totalDinero))
      }
    }
    localStorage.setItem("cantidad",JSON.stringify(this.productosCantidad));
  }

  busquedaClave(){
    let pos = [];
    for(let i=0;i<this.productosActual.length;i++){
      if(this.productosActual[i].tags.search(this.clave.value) == -1){
        pos.push(this.productosActual[i].codigo);
      }
      else{
        console.log('Encontrado');
      }
    }
    for(let j=0;j<pos.length;j++){
      for(let i=0;i<this.productosActual.length;i++){
        if(pos[j]==this.productosActual[i].codigo){
          this.productosActual.splice(i,1);
        }
      }
    }
    
  }


  datosCarrito(){
    this.serviceData.productosPorPagar = this.productosCantidad
    this.serviceData.productosCarrito = this.productosCarrito
    console.log(this.serviceData.productosPorPagar) //acceso a datos del service data
  }


  buscar(texto:any){
    
    console.log(this.a)
  
   let ProductosEncontrados = [];
   let busquedaProducto = texto.toLowerCase();

   this.productosActual =[   // Array para items en stock
    {  id:0,
      codigo: 211411, nombre: 'Piano digital Roland FP-10 ', precio: 550000,
      descripcion: 'Cuando llegue la inspiración, siéntese en el último modelo de la reconocida serie de pianos de Roland FP El FP-10 de nivel de entrada.', img: '../../assets/tarjetas/piano1.jpg',
      tags : "piano"
    },
    { id:1,
      codigo: 1108562, nombre: 'Piano digital Kawai  AC60 ', precio: 719900,
      descripcion: 'Los últimos pianos digitales de la serie CN de Kawai proporcionan un teclado realista de tamaño completo, hermosos sonidos de piano de cola y salidas de audífono que permiten la práctica silenciosa en cualquier momento del día.', img: '../../assets/tarjetas/piano2.jpg',
      tags : "piano"
    },
    { id:2,
      codigo: 1105866, nombre: 'Guitarra eléctrica Ltd EC401', precio: 390000,
      descripcion: 'GTR negra capsulas activas', img: '../../assets/tarjetas/gt1.jpg',
      tags : "guitarra"
    },
    { id:3,
      codigo: 211352, nombre: 'Batería electrónica Roland TD', precio: 990000,
      descripcion: 'La TD-1DMK te ofrece una gratificante experiencia musical en un kit compacto y transportable. Este módulo es sencillo pero potente, e incluye diversos kits de percusión expresivos, conectados a los pads de malla doble de Roland para la caja y los toms. Estos pads consiguen un «rebote» realista gracias a las dos capas de malla, que hacen que la batería rebote después de golpear la batería, como en un kit acústico.', img: '../../assets/tarjetas/bateria1.jpg',
      tags : "bateria,drums"
    },
    { id:4,
      codigo: 206503, nombre: 'Batería para niño', precio: 402000,
      descripcion: 'POWERDRUMS nos muestra su innovadora serie de percusiones y baterías económicas, enfocadas para el estudio. Diseñadas y fabricadas al mejor estilo de las grandes marcas a nivel mundial. Batería para niño. Incluye pedal de bombo y sillín...', img: '../../assets/tarjetas/bateria2.jpg',
      tags : "niño,bateria"
    },
    { id:5,
      codigo: 211479, nombre: 'Guitarra electroacústica ', precio: 85990,
      descripcion: 'GTR acustica', img: '../../assets/tarjetas/gt3.jpg',
      tags : "guitarra"
    },

    { id:6,
      codigo: 210109, nombre: 'Secuenciador de bajo Roland TB-3 ', precio: 334900,
      descripcion: 'LA MAGIA DEL TB-303 CON NUEVOS SONIDOS Y CARACTERÍSTICAS MODERNAS', img: '../../assets/tarjetas/tc1.jpg',
      tags : "Teclado"
    },
    { id:7,
      codigo: 1096284, nombre: 'Mini atril para guitarra', precio: 29990,
      descripcion: 'El GS402BB es un mini stand para guitarra eléctrica', img: '../../assets/tarjetas/atril1.jpg',
      tags : "atril"
    },
  ];


   for(let producto of this.productosActual){
     let nombre = producto.nombre.toLowerCase();
    
     if(nombre.indexOf(busquedaProducto)!== -1){
      ProductosEncontrados.push(producto)
      console.log(ProductosEncontrados)
      this.productosActual = ProductosEncontrados;
     }
   }
  
  }


  pagina(){
    this.router.navigate(['productos']);
     }
   }

