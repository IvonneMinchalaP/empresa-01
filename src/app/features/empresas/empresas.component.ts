import { Component } from '@angular/core';
import { EmpresasService } from 'src/app/servicio/empresas.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent {

  empresas: any[] = [];

  constructor(private empresasService: EmpresasService) {
    this.loadEmpresas();
  }

  loadEmpresas() {
    this.empresas = this.empresasService.getEmpresas();
  }

  agregarEmpresa() {
    this.empresasService.addEmpresa({ id: Date.now(), nombre: 'Nueva Empresa' });
    this.loadEmpresas();
  }

  actualizarEmpresa(id: number) {
    this.empresasService.updateEmpresa(id, { nombre: 'Empresa Actualizada' });
    this.loadEmpresas();
  }

  eliminarEmpresa(id: number) {
    this.empresasService.deleteEmpresa(id);
    this.loadEmpresas();
  }
}