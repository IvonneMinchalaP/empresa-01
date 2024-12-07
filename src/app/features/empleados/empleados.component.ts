import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/servicio/empleados.service';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {

  empleados: any[] = [];
  // Controla la visibilidad del popup
  isPopupVisible = false; 
  // Determina si es agregar o actualizar
  isUpdating = false; 
  currentEmpleado: any = { id: null, nombre: '', email: '', puesto: '', telefono: '' };

  events: Array<string> = [];
  
  constructor(private empleadosService: EmpleadosService) {
    this.loadEmpleados();
  }

  loadEmpleados() {
    this.empleados = this.empleadosService.getEmpleados();
  }

  agregarEmpleado() {
    this.isUpdating = false;
    this.currentEmpleado = { id: null, nombre: '', email: '', puesto: '', telefono: '' };
    // Muestra el popup
    this.isPopupVisible = true; 
  }

  actualizarEmpleado(empleado: any) {
    this.isUpdating = true;
    // Carga los datos del empleado seleccionado
    this.currentEmpleado = { ...empleado }; 
    // Muestra el popup
    this.isPopupVisible = true; 
  }

  guardarEmpleado() {
    if (this.isUpdating) {
      this.empleadosService.updateEmpleado(this.currentEmpleado.id, this.currentEmpleado);
    } else {
      this.empleadosService.addEmpleado({ ...this.currentEmpleado, id: Date.now() });
    }
    // Oculta el popup
    this.isPopupVisible = false; 
    // Recarga los datos
    this.loadEmpleados(); 
  }

  eliminarEmpleado(id: any) {
    console.log(id);
    this.empleadosService.deleteEmpleado(id);
    this.loadEmpleados();
  }
  // Cancelar la edición o adición
  cancelarEdicion() {
    this.isPopupVisible = false;
  }

  clearEvents() {
    this.events = [];
  }

}


  

  
