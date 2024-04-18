import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SeccionUnoComponent } from './seccion-uno/seccion-uno.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SeccionUnoComponent, NavBarComponent , SobreMiComponent,ConocimientosComponent, PortfolioComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Walter Guerrero';
}
