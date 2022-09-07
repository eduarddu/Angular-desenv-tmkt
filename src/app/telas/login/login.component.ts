import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToLogin(){
    
    this.router.navigate(['busca_rapida'])
  }

  goToMaterial(){
    this.router.navigate(['angular-material'])
  }

  goToConsultaFuncionario(){
    this.router.navigate(['consulta-funcionario'])
  }

  goToDesenv(){
    this.router.navigate(['abrir-demanda'])
  }

}
