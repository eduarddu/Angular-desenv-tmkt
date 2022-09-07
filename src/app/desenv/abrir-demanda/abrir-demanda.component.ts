import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { CentroResultado } from 'src/app/model/CentroResultado';
import { CentroResultadoService } from 'src/app/services/CentroResultado.service';
import { ConsultaApp } from 'src/app/model/ConsultaApp';
import { ConsultaAppService } from 'src/app/services/ConsultaApp.services';

import { ConsultaTemaChamadoApp } from 'src/app/model/ConsultaTemaChamadoApp';
import { ConsultaTemaChamadoAppService } from 'src/app/services/ConsultaTemaChamadoApp.service';
import { AbreChamado } from 'src/app/model/AbreChamado';
import { AbreChamadoService } from 'src/app/services/AbreChamado.service';

import { LoginuserComponent } from 'src/app/loginuser/loginuser.component';
import { ValidaAcesso } from 'src/app/model/ValidaAcesso';
import { ValidaAcessoService } from 'src/app/services/ValidaAcesso.service';

import { GetChamado } from 'src/app/model/GetChamado';
import { GetChamadoService } from 'src/app/services/GetChamado.service';

import { GetEncerraChamado } from 'src/app/model/GetEncerraChamado';
import { GetEncerraChamadoService } from 'src/app/services/GetEncerraChamado';

import { DxDataGridComponent} from 'devextreme-angular';






@Component({
  selector: 'app-abrir-demanda',
  templateUrl: './abrir-demanda.component.html',
  styleUrls: ['./abrir-demanda.component.css']
})
export class AbrirDemandaComponent implements OnInit {

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
  acesso = {} as ValidaAcesso;


  getChamadoAF: GetChamado [] = [];
  getChamadoA: GetChamado [] = [];
  visualizarGrdGetChamado = true;
  visualizarGrdGetChamadoFalse = true;
  txtVazioGrid = "Não há dados."
  atribuido = true;
  atribuidoFalse = false;

  usuario: string = '884573';
  getEncerraChamado: GetEncerraChamado [] = [];
  vusualizarGrdHistorico = false;

  srcResult: any = null;

  private storage: Storage;
  matriculaLocal=localStorage.getItem(this.acesso.matricula);
  

  constructor(
    private ConsultaTemaChamadoAppService: ConsultaTemaChamadoAppService
    ,private CentroResultadoService: CentroResultadoService
    ,private ConsultaAppService: ConsultaAppService
    ,private AbreChamadoService: AbreChamadoService
    ,private GetChamadoService: GetChamadoService
    ,private GetEncerraChamadoService: GetEncerraChamadoService
    ,http: HttpClient ) { 
      this.storage = window.localStorage;
    }

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

      insereChamado(ctrCodigo:number, agtCodigo:string,  aplCodigo: number, descricao: string, titulo: string){

        
          this.setAbreChamado.ctrCodigo = ctrCodigo;
          this.setAbreChamado.agtCodigo = localStorage.getItem('MATRICULA');
          this.setAbreChamado.aplCodigo = aplCodigo;
          this.setAbreChamado.descricao = descricao;
          this.setAbreChamado.titulo = titulo;

          this.AbreChamadoService.SetAbreChamado
          (this.setAbreChamado, this.setAbreChamado.ctrCodigo,this.setAbreChamado.agtCodigo
            ,this.setAbreChamado.aplCodigo,this.setAbreChamado.atcCodigo
            ,this.setAbreChamado.descricao,this.setAbreChamado.titulo).subscribe(()=> {})
      }

      geraGridGetChamado(atribuido:boolean){
       
          atribuido = true;
        this.GetChamadoService.GetChamado(atribuido).subscribe((getChamadoArray:GetChamado[])=>{
          this.getChamadoA=getChamadoArray
          this.visualizarGrdGetChamado = true;
        })
  }

  geraGridGetChamadoFalse(atribuidoFalse:boolean){
    atribuidoFalse = false;
    this.GetChamadoService.GetChamado(atribuidoFalse).subscribe((getChamadoArrayF:GetChamado[])=>{
      this.getChamadoAF=getChamadoArrayF
      this.visualizarGrdGetChamadoFalse = true;
    })

  }

  geraGridEncerraChamado(usuario: string){

    this.GetEncerraChamadoService.GetEncerraChamado(usuario).subscribe((getEncerraArray: GetEncerraChamado[])=>{
      this.getEncerraChamado = getEncerraArray
      this.vusualizarGrdHistorico = true;
    })
  }
}

 

  


