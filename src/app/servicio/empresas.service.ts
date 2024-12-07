import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
  private empresas = [
    { id: 1, nombre: 'Empresa 1' },
    { id: 2, nombre: 'Empresa 2' }
  ];

  getEmpresas() {
    return this.empresas;
  }

  addEmpresa(empresa: any) {
    this.empresas.push(empresa);
  }

  updateEmpresa(id: number, updatedData: any) {
    const empresa = this.empresas.find(e => e.id === id);
    if (empresa) Object.assign(empresa, updatedData);
  }

  deleteEmpresa(id: number) {
    this.empresas = this.empresas.filter(e => e.id !== id);
  }
}