import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialComponent } from './telas/angular-material/angular-material.component';

import { LoginComponent } from './telas/login/login.component';
import { ConsultaFuncionarioComponent } from './telas/consulta-funcionario/consulta-funcionario.component';
import { AbrirDemandaComponent } from './desenv/abrir-demanda/abrir-demanda.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { AbrirDemanda2Component } from './desenv/abrir-demanda2/abrir-demanda2.component';
import { TesteRowComponent } from './teste-row/teste-row.component';




const routes: Routes = [
  {path: 'angular-material', component: AngularMaterialComponent},
  {path: 'consulta-funcionario', component: ConsultaFuncionarioComponent},
  {path: 'abrir-demanda', component: AbrirDemandaComponent},
  {path: '', component: LoginuserComponent},
  {path: 'teste', component: TesteRowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
