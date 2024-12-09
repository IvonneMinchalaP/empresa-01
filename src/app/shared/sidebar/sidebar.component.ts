import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  sections = ['Home', 'Empleados', 'Empresas', 'Cerrar session'];
  userSettings = { notifications: true, darkMode: false };
}
