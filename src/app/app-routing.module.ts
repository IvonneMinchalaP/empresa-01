import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing';
import { FeaturesRoutingModule } from './features/features-routing';
import { EmpresasComponent } from './features/empresas/empresas.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data:{ titulo:'Login' } },
  { path: 'empresas', component: EmpresasComponent, data:{ titulo:'Empresas' } },
  { path: 'empleados', component: EmpresasComponent, data:{ titulo:'Empleados' } },


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AuthRoutingModule,
    FeaturesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
