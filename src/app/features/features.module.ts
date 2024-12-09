import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { RouterModule } from '@angular/router';
import { DxDataGridModule, DxButtonModule, DxPopupModule, DxTextBoxModule, DxDateBoxModule } from 'devextreme-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { FeaturesRoutingModule } from './features-routing';
import { EmpleadosService } from '../servicio/empleados.service';
import { EmpresasService } from '../servicio/empresas.service';
import { SharedModule } from '../shared/shared.module';
import { FeaturesComponent } from './features.component';



@NgModule({
  declarations: [
    EmpleadosComponent,
    EmpresasComponent,
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DxButtonModule, 
    DxDataGridModule, // Grid para manejar datos
    FeaturesRoutingModule,
    DxPopupModule,
    DxTextBoxModule,
    FormsModule,
    ReactiveFormsModule,
    DxDateBoxModule,
    SharedModule
  ],
  providers: [
    EmpleadosService,
    EmpresasService
  ],
  exports:[
    EmpleadosComponent,
    EmpresasComponent
  ],
})
export class FeaturesModule { }




