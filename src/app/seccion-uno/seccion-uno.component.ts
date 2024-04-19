import { Component } from '@angular/core';

@Component({
  selector: 'app-seccion-uno',
  standalone: true,
  imports: [],
  templateUrl: './seccion-uno.component.html',
  styleUrl: './seccion-uno.component.css'
})
export class SeccionUnoComponent {

// Método para redireccionar a una URL en una nueva pestaña
redireccionar(url:string) {
  window.open(url, '_blank');
}

redireccionpagina(url:string) {
  window.open(url);
}


}
