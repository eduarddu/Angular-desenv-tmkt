import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CentroResultado } from 'src/app/model/CentroResultado';
import { CentroResultadoService } from 'src/app/services/CentroResultado.service';
import { ConsultaApp } from 'src/app/model/ConsultaApp';
import { ConsultaAppService } from 'src/app/services/ConsultaApp.services';

import { ConsultaTemaChamadoApp } from 'src/app/model/ConsultaTemaChamadoApp';
import { ConsultaTemaChamadoAppService } from 'src/app/services/ConsultaTemaChamadoApp.service';


import { LoginuserComponent } from 'src/app/loginuser/loginuser.component';
import { ValidaAcesso } from 'src/app/model/ValidaAcesso';
import { ValidaAcessoService } from 'src/app/services/ValidaAcesso.service';

import { GetChamado } from 'src/app/model/GetChamado';

import { AbreChamado } from 'src/app/model/AbreChamado';
import { AbreChamadoService } from 'src/app/services/AbreChamado.service';

@Component({
  selector: 'app-abrir-demanda2',
  templateUrl: './abrir-demanda2.component.html',
  styleUrls: ['./abrir-demanda2.component.css']
})
export class AbrirDemanda2Component implements OnInit {
  centroResultadoArray: CentroResultado[]=[];
  centroResult = {} as CentroResultado;
  agtCodigo: string = "885089"; 
  tipoBusca: number = 1 ; 
  ctrCodigo: number = 131;


  consultaAppArray: ConsultaApp[] = [];
  consultaApp = {} as ConsultaApp;
 

  consultaTemaChamadoAppArray: ConsultaTemaChamadoApp[] = [];
  consultaTemaChamadoApp = {} as ConsultaTemaChamadoApp;
  aplCodigo!: number;

  setAbreChamado = {} as AbreChamado;
  
  getChamadoA: GetChamado [] = [];

  srcResult: any = null;
  constructor(
    private ConsultaTemaChamadoAppService: ConsultaTemaChamadoAppService
    ,private CentroResultadoService: CentroResultadoService
    ,private ConsultaAppService: ConsultaAppService
    
   
    
    ,http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  getCentroResultado(agtCodigo: string, tipoBusca: number, ctrCodigo: number ){
    this.CentroResultadoService.GetCentroResultado(agtCodigo, tipoBusca, ctrCodigo).subscribe(
      (varCentroResultArray: CentroResultado[]) => {
        this.centroResultadoArray = varCentroResultArray
      }
    )
  }


    
  

  getConsultaApp(){
    this.ConsultaAppService.GetConsultaApp().subscribe(
      (varConsultaAppArray:ConsultaApp[]) =>{
        this.consultaAppArray = varConsultaAppArray
        }
      )
    }



    onFileSelected() {
      const inputNode: any = document.querySelector('#file');
    
      if (typeof (FileReader) !== 'undefined') {
        const reader = new FileReader();
    
        reader.onload = (e: any) => {
          this.srcResult = e.target.result;
        };
    
        reader.readAsArrayBuffer(inputNode.files[0]);
      }
    }

  getConsultaTemaChamadoApp(aplCodigo: number){
    
    this.ConsultaTemaChamadoAppService.GetConsultaTemaChamadoApp(aplCodigo).subscribe(
      (varConsultaTemaArray: ConsultaTemaChamadoApp[]) => {
        this.consultaTemaChamadoAppArray = varConsultaTemaArray

      }
    )
   
  }

    

}
