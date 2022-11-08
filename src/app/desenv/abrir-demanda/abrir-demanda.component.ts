import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild, Input, ElementRef, Renderer2 } from '@angular/core';

import { CentroResultado } from 'src/app/model/CentroResultado';
import { CentroResultadoService } from 'src/app/services/CentroResultado.service';

import { ConsultaApp } from 'src/app/model/ConsultaApp';
import { ConsultaAppService } from 'src/app/services/ConsultaApp.services';

import { ConsultaTemaChamadoApp } from 'src/app/model/ConsultaTemaChamadoApp';
import { ConsultaTemaChamadoAppService } from 'src/app/services/ConsultaTemaChamadoApp.service';

import { map } from 'rxjs/operators'

import { LoginuserComponent } from 'src/app/loginuser/loginuser.component';
import { ValidaAcesso } from 'src/app/model/ValidaAcesso';
import { ValidaAcessoService } from 'src/app/services/ValidaAcesso.service';

import { GetChamado } from 'src/app/model/GetChamado';
import { GetChamadoService } from 'src/app/services/GetChamado.service';
import { GetEncerraChamado } from 'src/app/model/GetEncerraChamado';
import { GetEncerraChamadoService } from 'src/app/services/GetEncerraChamado'

import { Desenvolvedor } from 'src/app/model/Desenvolvedor';
import { DesenvolvedorService } from 'src/app/services/Desenvolvedor.service';

import { DxDataGridComponent, DxSelectBoxComponent, DxFileUploaderModule} from 'devextreme-angular';
import LocalStore from 'devextreme/data/local_store';
import { DxHtmlEditorModule, DxCheckBoxModule } from 'devextreme-angular';
import TextArea from "devextreme/ui/text_area";
import {DxDataGridModule, DxFormModule, DxSelectBoxModule, DxTabPanelModule,} from 'devextreme-angular';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import CustomStore from 'devextreme/data/custom_store';

import { AtualizaChamadoService } from 'src/app/services/SetAtualizaChamado.service';
import { AtualizaChamado } from 'src/app/model/SetAtualizaChamado';

import DataSource from "devextreme/data/data_source";
import { Router,ActivatedRoute } from '@angular/router';

import { EncerraChamadoService } from 'src/app/services/EncerraChamado.service';
import { EncerraChamado } from 'src/app/model/EncerraChamado';

import { AbreChamado } from 'src/app/model/AbreChamado';
import { AbreChamadoService } from 'src/app/services/AbreChamado.service';

import * as $ from 'jquery';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators  } from '@angular/forms';

import Button from "devextreme/ui/button";
import { saveAs } from 'file-saver';
import { Observable } from 'rxjs';
import { base64_encode } from "devextreme/data/utils";




@Component({
  selector: 'app-abrir-demanda',  
  templateUrl: './abrir-demanda.component.html',
  styleUrls: ['./abrir-demanda.component.css']
})
export class AbrirDemandaComponent implements OnInit {

  @ViewChild('grdGetChamado', { static: false }) grdGetChamado!: DxDataGridComponent;
  @ViewChild('grdGetChamadoFalse', { static: false }) grdGetChamadoFalse!: DxDataGridComponent;


  AbrirDemandaForm!: FormGroup;

  centroResultadoArray: CentroResultado[]=[];
  centroResult = {} as CentroResultado;
  agtCodigo: string = "885089"; 
  tipoBusca: number = 1 ; 
  ctrCodigo: number = 131;

  currentTab!: string[];

  consultaAppArray: ConsultaApp[] = [];
  consultaApp = {} as ConsultaApp;

 
  consultaTemaChamadoAppArray: ConsultaTemaChamadoApp[] = [];
  consultaTemaChamadoApp = {} as ConsultaTemaChamadoApp;
  aplCodigo!: number;
 
 
  
  acesso = {} as ValidaAcesso;
  acessoarray: ValidaAcesso [] = [];

  getChamadoObj = {} as GetChamado;
  getChamadoAF: GetChamado [] = [];
  getChamadoA: GetChamado [] = [];
  visualizarGrdGetChamado = true;
  visualizarGrdGetChamadoFalse = true;
  txtVazioGrid = "Não há dados."
  atribuido = true;
  atribuidoFalse = false;


  usuario: any = localStorage.getItem('MATRICULA');
  
  getEncerraChamado: GetEncerraChamado [] = [];
  vusualizarGrdHistorico = false;

  srcResult: any = null;
  file: any;

  private storage: Storage;
  matriculaLocal=localStorage.getItem(this.acesso.matricula);

  tabAbrirDemanda= "";
  tabAcompanhamento="";
  labelName!:string;

  prazo!:any;
  AtualizacaoRadio: string[];

  base64Data!:string; 
  contentType!:string 
  sliceSize!:number;
  

  consultaDevObj = {} as Desenvolvedor;
  consultaDevArray: Desenvolvedor [] = [];

  opcaoRadio:string="";
  AtualizaChamadoArray: AtualizaChamado[] = [];
  atualizaChamadoObj = {} as AtualizaChamado;
 
  chacodigo!:number ;
  status!: string; 
  chaCodigoEnc!:any;
  statusEnc='F';

  agtCodigoDev="";
  chacodigoAtu="";

  storeDev!: LocalStore;
  dataSource!: DataSource;
  
  AtualizaTextArea!:any;
  
  testeImgText!:any;
  encerraChamadoObj = {} as EncerraChamado

  chaCodiAbre!:any;

  images:any;
  
  descricaoAtu:any;
  pegaChaCodigo: any;
 
setAbreChamado = {} as AbreChamado;
atcCodigo!:number;
descricao!:string;
titulo!:string;
chaCodigo!:any;
agtCodigoLocal:any = localStorage.getItem('MATRICULA')
key = true;

myImage!:Observable<any>;
base64code!:any;

onChange= ($event: Event) =>{
 const target =  $event.target as HTMLInputElement;

 const file: File = (target.files as FileList)[0];

 console.log(file);
 }


  constructor(
     private ConsultaTemaChamadoAppService: ConsultaTemaChamadoAppService
    ,private CentroResultadoService: CentroResultadoService
    ,private ConsultaAppService: ConsultaAppService
    ,private GetChamadoService: GetChamadoService
    ,private GetEncerraChamadoService: GetEncerraChamadoService
    ,private DesenvolvedorService: DesenvolvedorService
    ,private AtualizaChamadoService: AtualizaChamadoService
    ,private EncerraChamadoService: EncerraChamadoService
    ,private AbreChamadoService: AbreChamadoService
    ,private http: HttpClient
    ,private router: Router)

     { 
      this.storage = window.localStorage;
      this.AtualizacaoRadio = [
        'Atualizar Status',
        'Encerra Chamado',]
      }
  

  ngOnInit(): void {
    this.AbrirDemandaForm = new FormGroup({
      tituloForm: new FormControl('', [Validators.required]),
      descricaoForm: new FormControl('', [Validators.required]),
      id: new FormControl(''),
      
    });
  }

  get tituloForm()
  {
    return this.AbrirDemandaForm.get('tituloForm')!;
  }

  get descricaoForm()
  {
    return this.AbrirDemandaForm.get('descricaoForm')!;
  }


  

  submit()
  {
    if(this.AbrirDemandaForm.invalid){
      return;
    }
    console.log("envio form");
  }
  
    selectFile(e: any){
      this.file = e.target.files[0];
    }

    onRowExpanded(){

    this.selecionaLinhaGrid()
    this.descricaoAtu = localStorage.getItem('DescricaoGrid')
    this.pegaChaCodigo = localStorage.getItem('chaCodigoGrid')
    console.log(this.pegaChaCodigo); 
    }
    onRowExpandedTrue(){

      this.selecionaLinhaGridTrue()
      this.descricaoAtu = localStorage.getItem('DescricaoGrid')
      this.pegaChaCodigo = localStorage.getItem('chaCodigoGrid')
      console.log(this.pegaChaCodigo); 
      }

    selecionaLinhaGrid()
    {
      if(this.grdGetChamado.selectedRowKeys.length){
            
        localStorage.setItem('chaCodigoGrid',this.grdGetChamado.instance.getSelectedRowsData()[0].chaCodigo)
        localStorage.setItem('DescricaoGrid',(this.grdGetChamado.instance.getSelectedRowsData()[0].chaDescricao))
        localStorage.setItem('chaCodigoGrid',this.grdGetChamadoFalse.instance.getSelectedRowsData()[0].chaCodigo)
        localStorage.setItem('DescricaoGrid',(this.grdGetChamadoFalse.instance.getSelectedRowsData()[0].chaDescricao))
        //location.reload()
      }
    }
    selecionaLinhaGridTrue()
    {
      if(this.grdGetChamado.selectedRowKeys.length){
            
        localStorage.setItem('chaCodigoGrid',this.grdGetChamado.instance.getSelectedRowsData()[0].chaCodigo)
        localStorage.setItem('DescricaoGrid',(this.grdGetChamado.instance.getSelectedRowsData()[0].chaDescricao))
        //localStorage.setItem('chaCodigoGrid',this.grdGetChamadoFalse.instance.getSelectedRowsData()[0].chaCodigo)
        //localStorage.setItem('DescricaoGrid',(this.grdGetChamadoFalse.instance.getSelectedRowsData()[0].chaDescricao))
        //location.reload()
      }
    }

    pegaImg()
    {
      const img = document.querySelector('img')!
       
      let base64 = base64_encode(img.src)
      console.log(base64);
    }

  upload()
  {
    let formData = new FormData();
    formData.append('file', this.file);
    this.http.post('https://localhost:44350/api/demoUpdate/uploads?', formData).
    toPromise().then(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  mudaConteudo()
  {
    var area = document.getElementById("teste45")!;

    if (area.dataset['content'] == "html") {
      area.innerText = area.innerHTML;
      area.dataset['content'] = "text";
    } else {
      area.innerHTML = area.innerText;
      area.dataset['content'] = "html";
    }

  }

  uploadUpdate()
  {
 

    let formData = new FormData();
    formData.append('file', this.file);
    this.http.post('https://localhost:44350/api/demoUpdate/uploadUpdate', formData).
    toPromise().then(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

 

  getConsultaDev()
  {
    this.DesenvolvedorService.GetConsultaDev().subscribe((varConsultaDevArray: Desenvolvedor[]) => {
      this.consultaDevArray = varConsultaDevArray;
      console.log(this.consultaDevObj.nrreg)
    })
    localStorage.setItem('nrreg', this.consultaDevObj.nrreg)
    
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

  getConsultaTemaChamadoApp(aplCodigo: number)
  {
    this.ConsultaTemaChamadoAppService.GetConsultaTemaChamadoApp(aplCodigo).subscribe(
      (varConsultaTemaArray: ConsultaTemaChamadoApp[]) => {
        this.consultaTemaChamadoAppArray = varConsultaTemaArray
      })
  }

  
  insereChamado(ctrCodigo:number, agtCodigo:string,  aplCodigo: number, atcCodigo:number,  titulo: string, descricao: string){

    let formData = new FormData();
    formData.append('file', this.file);
    this.setAbreChamado.ctrCodigo = ctrCodigo;
    this.setAbreChamado.agtCodigo = localStorage.getItem('MATRICULA');
    this.setAbreChamado.aplCodigo = aplCodigo;
    this.setAbreChamado.atcCodigo = this.consultaTemaChamadoApp.atcCodigo
    this.setAbreChamado.titulo = titulo;
    this.setAbreChamado.descricao = descricao;
   

    var teste = this.AbreChamadoService.SetAbreChamado
    (formData,this.setAbreChamado.ctrCodigo,this.setAbreChamado.agtCodigo
      ,this.setAbreChamado.aplCodigo,this.setAbreChamado.atcCodigo = this.consultaTemaChamadoApp.atcCodigo,
      this.setAbreChamado.titulo,this.setAbreChamado.descricao).subscribe(()=> {})

      
}

  


  EncerraChamado(chaCodigoEnc: any,statusEnc:string)
  {
    chaCodigoEnc = localStorage.getItem('chaCodigoGrid');
    this.encerraChamadoObj.status = statusEnc;

    this.EncerraChamadoService.SetEncerraChamado(this.encerraChamadoObj,chaCodigoEnc,
    this.encerraChamadoObj.status).subscribe(()=> {})
  }

 

  geraGridGetChamado(atribuido:boolean)
    {
          atribuido = true;

          this.GetChamadoService.GetChamado(atribuido).subscribe((getChamadoArray:GetChamado[])=>{
          this.getChamadoA=getChamadoArray
          this.visualizarGrdGetChamado = true;
        })

        /*
        if(this.grdGetChamado.selectedRowKeys.length){
          
          localStorage.setItem('chaCodigoGrid',this.grdGetChamado.instance.getSelectedRowsData()[0].chaCodigo)
          localStorage.setItem('DescricaoGrid',(this.grdGetChamado.instance.getSelectedRowsData()[0].chaDescricao))
          //location.reload()
        }*/
        
        
      }

  geraGridGetChamadoFalse(atribuidoFalse:boolean)
  {
      atribuidoFalse = false;

      this.GetChamadoService.GetChamado(atribuidoFalse).subscribe((getChamadoArrayF:GetChamado[])=>{
      this.getChamadoAF=getChamadoArrayF
      this.visualizarGrdGetChamadoFalse = true;
    })
    if(this.grdGetChamadoFalse?.selectedRowKeys.length)
    {
    localStorage.setItem('chaCodigoGrid',this.grdGetChamadoFalse.instance.getSelectedRowsData()[0].chaCodigo)
    localStorage.setItem('DescricaoGrid',(this.grdGetChamadoFalse.instance.getSelectedRowsData()[0].chaDescricao))
    }


  }
  geraGridEncerraChamado(usuario: any)
  {
    
      this.GetEncerraChamadoService.GetEncerraChamado(usuario).subscribe((getEncerraArray: GetEncerraChamado[])=>{
      this.getEncerraChamado = getEncerraArray
      this.vusualizarGrdHistorico = true;
    })
  }
  eventoTab(event: any)
  {
    switch(this.labelName = event.tab.textLabel){
      case "Acompanhamento":
        this.geraGridGetChamado(this.atribuido)
      break;
      case "Demandas Abertas":
        this.geraGridGetChamadoFalse(this.atribuidoFalse)
      break;  
      case "Histórico":
        this.geraGridEncerraChamado(this.usuario)
      break;
      
    } 
  }

  atualizaChamado(chacodigoAtu:any,status:string,agtCodigoDev:any,prazo:any)
  {
    chacodigoAtu = localStorage.getItem('chaCodigoGrid');
    status = "D"
    agtCodigoDev = localStorage.getItem('nrreg');
    this.atualizaChamadoObj.prazo = prazo;

    this.AtualizaChamadoService.SetAtualizaChamado(this.atualizaChamadoObj
      ,chacodigoAtu,status
      ,agtCodigoDev,this.atualizaChamadoObj.prazo).subscribe(()=> {})
       
  }

 SelecionaRadio()
 {
  if(this.opcaoRadio =="1")
  {
    this.atualizaChamado(this.chacodigo, this.status, this.agtCodigoDev, this.prazo) 
  }
  if(this.opcaoRadio == "2")
  {
    this.EncerraChamado(this.chaCodigoEnc, this.statusEnc)
  }
 }

}
