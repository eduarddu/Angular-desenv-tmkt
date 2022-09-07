import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CadastroMenu } from 'src/app/model/CadastroMenu';
import { CadastroPagina } from 'src/app/model/CadastroPagina';
import { CadastroMenuService } from 'src/app/services/CadastroMenu.services';
import { CadastroPaginaService } from 'src/app/services/CadastroPagina.service';
import { ConsultaPagina } from 'src/app/model/ConsultaPagina';
import { ConsultaPaginaService } from 'src/app/services/ConsultaPagina.service';
import { DxDataGridComponent} from 'devextreme-angular';
import { ConsultaMenuService } from 'src/app/services/ConsultaMenu.services';
import { ConsultaMenu } from 'src/app/model/ConsultaMenu';
import { jsPDF } from 'jspdf';
import { exportDataGrid } from 'devextreme/pdf_exporter';


@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.css']
})
export class AngularMaterialComponent implements OnInit {
  txtVazioGrid = "Não há dados."
@ViewChild('grdConsultaPagina', { static: false }) grdConsultaPagina: DxDataGridComponent | undefined;
@ViewChild('grdConsultaMenu', { static: false }) grdConsultaMenu: DxDataGridComponent | undefined;

  
  setCadastro = {} as CadastroMenu
  setCadastroPag = {} as CadastroPagina;
  consultaPag: ConsultaPagina[]=[];
  consultaMenu: ConsultaMenu[]=[];
  visualizarGrdConsultaPagina = false;
  visualizarGrdConsultaMenu = false;
  visualizarBtnGravarMenu = false;
  opcaoRadio:string = "";
  
  

  
  constructor(

    private cadastroMenuService: CadastroMenuService, http: HttpClient, 
    private CadastroPaginaService: CadastroPaginaService, 
    private ConsultaPaginaService: ConsultaPaginaService,
    private ConsultaMenuService: ConsultaMenuService) { }

  ngOnInit(): void {
    
  }

 
  
  insereMenu(nome:string){
    this.setCadastro.nome = nome
    this.cadastroMenuService.SetCadastroMenu(this.setCadastro.nome).subscribe(()=> {})

   }
 

  inserePagina(Nome: string, Endereco: string, Menu: string): void{
    this.setCadastroPag.Nome = Nome
    this.setCadastroPag.Endereco = Endereco 
    this.setCadastroPag.Menu = Menu
  
    this.CadastroPaginaService.SetCadastroPagina(this.setCadastroPag.Nome, this.setCadastroPag.Endereco, this.setCadastroPag.Menu).subscribe(()=> {})
  }


  getMenu(){
    this.ConsultaMenuService.GetConsultaMenu().subscribe((getConsultaMenuArray: ConsultaMenu[])=>{
      this.consultaMenu = getConsultaMenuArray
    })
  }

  verificarOpcaoGeraGrid(){
    if(this.opcaoRadio == "1"){
      this.ConsultaMenuService.GetConsultaMenu().subscribe((getConsultaMenuArray: ConsultaMenu[])=>{
        this.consultaMenu = getConsultaMenuArray
      })
      this.visualizarGrdConsultaMenu = true;
      
    }
    else if(this.opcaoRadio == "2"){
      this.ConsultaPaginaService.GetConsultaPag().subscribe((getConsultaArray: ConsultaPagina[])=> {
        this.consultaPag = getConsultaArray
      })
      this.visualizarGrdConsultaPagina = true;
    }
  }
}
