import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DxDataGridComponent} from 'devextreme-angular';
import { ConsultaMenuService } from 'src/app/services/ConsultaMenu.services';
import { ConsultaMenu } from 'src/app/model/ConsultaMenu';
import { jsPDF } from 'jspdf';
import { exportDataGrid } from 'devextreme/pdf_exporter';
import { ConsultaFuncionario } from 'src/app/model/ConsultaFuncionario';
import { ConsultaFuncionarioService } from 'src/app/services/ConsultaFuncionario.services';

@Component({
  selector: 'app-consulta-funcionario',
  templateUrl: './consulta-funcionario.component.html',
  styleUrls: ['./consulta-funcionario.component.css']
})
export class ConsultaFuncionarioComponent implements OnInit {

  txtVazioGrid= "Não há dados."
  @ViewChild('grdConsultaFuncionario', { static: false }) grdConsultaFuncionario: DxDataGridComponent | undefined;
  
  Matricula:string = "";
  Nome: string = "";
  consultaFuncionarioArray: ConsultaFuncionario[]=[]
  visualizarGrdConsultaFun= false;

  constructor(
    private ConsultaFuncionarioService: ConsultaFuncionarioService
  ) { }

  ngOnInit(): void {
  }

  GetConsultaFuncionario(Matricula: string, Nome: string){
    this.ConsultaFuncionarioService.GetConsultaFuncionario(Matricula, Nome).subscribe(
      (varConsultaFunArray: ConsultaFuncionario[]) => {
        this.consultaFuncionarioArray = varConsultaFunArray

        this.visualizarGrdConsultaFun = true;
      }
    )
  }

  btnPesquisarFuncionario(){
    this.GetConsultaFuncionario(this.Matricula, this.Nome)
  }

}

