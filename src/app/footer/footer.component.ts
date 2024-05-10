import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {


// Método para redireccionar a una URL en una nueva pestaña
redireccionar(url:string) {
  window.open(url, '_blank');
}

redireccionpagina(url:string) {
  window.open(url);
}


}
