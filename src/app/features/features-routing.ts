import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasComponent } from './empresas/empresas.component';
import { EmpleadosComponent } from './empleados/empleados.component';

const routes: Routes = [
  { path: 'empresas', component: EmpresasComponent, data:{ titulo:'Empresas' } },
  { path: 'empleados', component: EmpleadosComponent, data:{ titulo:'Empleados' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {}