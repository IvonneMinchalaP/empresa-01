import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  private empleados = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com', puesto: 'Gerente', telefono: '123456789' },
    { id: 2, nombre: 'Ana López', email: 'ana@example.com', puesto: 'Analista', telefono: '987654321' }
  ];

  getEmpleados() {
    return this.empleados;
  }

  addEmpleado(empleado: any) {
    this.empleados.push(empleado);
  }

  updateEmpleado(id: number, updatedData: any) {
    const empleado = this.empleados.find(e => e.id === id);
    if (empleado) Object.assign(empleado, updatedData);
  }

  deleteEmpleado(id: number) {
    this.empleados = this.empleados.filter(e => e.id !== id);
  }
}