import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { CentroResultado } from 'src/app/model/CentroResultado';
import { CentroResultadoService } from 'src/app/services/CentroResultado.service';
import { ConsultaApp } from 'src/app/model/ConsultaApp';
import { ConsultaAppService } from 'src/app/services/ConsultaApp.services';
import { ConsultaTemaChamadoApp } from 'src/app/model/ConsultaTemaChamadoApp';
import { ConsultaTemaChamadoAppService } from 'src/app/services/ConsultaTemaChamadoApp.service';
import { AbreChamado } from 'src/app/model/AbreChamado';
import { LoginuserComponent } from 'src/app/loginuser/loginuser.component';
import { ValidaAcesso } from 'src/app/model/ValidaAcesso';
import { ValidaAcessoService } from 'src/app/services/ValidaAcesso.service';
import { GetChamado } from 'src/app/model/GetChamado';
import { GetChamadoService } from 'src/app/services/GetChamado.service';
import { GetEncerraChamado } from 'src/app/model/GetEncerraChamado';
import { GetEncerraChamadoService } from 'src/app/services/GetEncerraChamado';
import { Desenvolvedor } from 'src/app/model/Desenvolvedor';
import { DesenvolvedorService } from 'src/app/services/Desenvolvedor.service';
import { DxDataGridComponent, DxSelectBoxComponent} from 'devextreme-angular';
import LocalStore from 'devextreme/data/local_store';
import { DxHtmlEditorModule, DxCheckBoxModule } from 'devextreme-angular';
import TextArea from "devextreme/ui/text_area";
import {DxDataGridModule, DxFormModule, DxSelectBoxModule, DxTabPanelModule,} from 'devextreme-angular';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import CustomStore from 'devextreme/data/custom_store';
import { AtualizaChamadoService } from 'src/app/services/SetAtualizaChamado.service';
import { AtualizaChamado } from 'src/app/model/SetAtualizaChamado';
import { DatePipe } from '@angular/common';
import DataSource from "devextreme/data/data_source";
import SelectBox from "devextreme/ui/select_box";
import { teste } from 'src/app/model/teste';
import { Router,ActivatedRoute } from '@angular/router';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';
import {
  NgModule, enableProdMode,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxTreeListModule, DxNumberBoxModule } from 'devextreme-angular';



const url = 'https://js.devexpress.com/Demos/Mvc/api/TreeListTasks'

@Component({
  selector: 'app-teste-row',
  templateUrl: './teste-row.component.html',
  styleUrls: ['./teste-row.component.css']
})
export class TesteRowComponent  {

  Price =[
    {Count: 10,
      TotalPrice: 100}
  ]


 

}
