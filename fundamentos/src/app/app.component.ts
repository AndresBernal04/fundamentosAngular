import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // 1. Declaración e inicialización de mis variables
  // = -> Asignación
  // == o === -> comparación
  nombreFramework: string = "Angular";
  horasBootcamp: number = 300;
  especialista: string = "Luisa Castaño";

  // Esto es un objeto
  contenidoBootcamp = {
    tecnologia1: "HTML",
    tecnologia2: "CSS",
    tecnologia3: "JS",
    tecnologia4: "ANGULAR",
    tecnologia5: "NODE.JS",
  }

  objetoProducto = {
    nombre: "Galletas",
    cantidad: 30,
    vendido: true,
  }


  colorFondo: string = "colorPink";
  // Forma correcta de manejar las variables de tipo booleano
  isLogged : boolean = false;
  isDelete : boolean = true ;
  isShowed : boolean = false ;

  productos : string[] = ["Carros", "Motos", "Bicicletas"]

// -----------------------------------------

// 2. Funciones o métodos

saludo(){
  console.log("Holaaa, soy un botón al que le diste click");
}

manejarMouseOver(){
  console.log("Evento mouse encima de la caja");
  this.colorFondo = "colorRojo"
}

manejarMouseOut(){
  console.log("Evento mouse fuera de la caja");
  this.colorFondo = "colorVerde"
}

manejarClick(){
  console.log("Evento click");
  this.colorFondo = "colorPink"
}









// 3. Exportaciones - ciclo de vida

}
