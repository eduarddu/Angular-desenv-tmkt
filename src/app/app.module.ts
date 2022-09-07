import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './telas/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DevExtremeModule } from 'devextreme-angular';
import { AngularMaterialComponent } from './telas/angular-material/angular-material.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { ConsultaFuncionarioComponent } from './telas/consulta-funcionario/consulta-funcionario.component';
import { AbrirDemandaComponent } from './desenv/abrir-demanda/abrir-demanda.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { AbrirDemanda2Component } from './desenv/abrir-demanda2/abrir-demanda2.component';











@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AngularMaterialComponent,
    ConsultaFuncionarioComponent,
    AbrirDemandaComponent,
    LoginuserComponent,
    AbrirDemanda2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    DevExtremeModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTabsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
