import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Mi Aplicación Profesional';
  navigationLinks = ['Home', 'Empleados', 'Empresas', 'Cerrar Session'];
  userInfo = { name: 'John ', role: 'Administrator' };
}

