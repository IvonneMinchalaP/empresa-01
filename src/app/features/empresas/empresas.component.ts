import { Component,OnInit  } from '@angular/core';
import { EmpresasService } from 'src/app/servicio/empresas.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent {
  empresas: any[] = [];
  isPopupVisible = false;
  isUpdating = false;
  currentEmpresa: any = { nombre: '', email: '', telefono: '', direccion: '', fechaFundacion: null };

  constructor(private empresasService: EmpresasService) {}

  ngOnInit(): void {
    this.loadEmpresas();
  }

  loadEmpresas() {
    this.empresas = this.empresasService.getEmpresas();
  }

  agregarEmpresa() {
    this.isUpdating = false;
    this.currentEmpresa = { nombre: '', email: '', telefono: '', direccion: '', fechaFundacion: null };
    this.isPopupVisible = true;
  }

  editarEmpresa(data: any) {
    this.isUpdating = true;
  //this.currentEmpresa = { ...event.row.data };
  // Carga la empresa seleccionada
  this.currentEmpresa = {...data}; // Guarda la empresa seleccionada
  this.isPopupVisible = true;
  }
  

  guardarEmpresa() {
    if (this.isUpdating) {
       this.empresasService.updateEmpresa(this.currentEmpresa.id, this.currentEmpresa);
    } else {
      this.empresasService.addEmpresa({ ...this.currentEmpresa, id: Date.now() });
    }
     this.isPopupVisible = false;
     this.loadEmpresas();
  }

 
  eliminarEmpresa(event: any) {
    const id = event.row.data.id;
    this.empresasService.deleteEmpresa(id);
    this.loadEmpresas();
  }

  cancelarEdicion() {
    this.isPopupVisible = false;
  }
}