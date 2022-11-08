import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder,FormControl } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { ValidaAcesso } from '../model/ValidaAcesso';
import { ValidaAcessoService } from '../services/ValidaAcesso.service';



@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {
  
  matricula:string = '';
  senha:string = '';
  private storage: Storage;
 acesso = {} as ValidaAcesso
 acessoValLocal = false;
 acessoArray: ValidaAcesso[] = [];
 MatriculaArray= localStorage.getItem('MATRICULA');
 par1!: any;
  

  constructor(private ValidaAcessoService: ValidaAcessoService,private router: Router) 
   {
    this.storage = window.localStorage;
   }

  ngOnInit() {
   
  }


  loginUser() 
  {
    if( this.matricula == '' && this.matricula == null )
    {
      alert("Informe a matrícula.")
    } 
    else if(this.senha == '' && this.senha == null)
    {
      alert("Informe a senha.")
    }

    else 
    {
      
        this.ValidaAcessoService.login(this.matricula,this.senha).subscribe((acesso: ValidaAcesso) => {
        localStorage.setItem('MATRICULA',JSON.parse(this.matricula));
        if (this.ValidaAcessoService.islogged()){
          this.router.navigate(["abrir-demanda"])
          
        }
        
      else {
          
        }
       
        this.matricula = "";
        this.senha = "";
        
      })

      
     
    }
  }

  //ARMAZENANDO DADOS NA LOCAL STORAGE
  armazenaDadosLS(par1:any){

    if(par1 == this.MatriculaArray)
    {
      console.log(this.acesso)
    }
    
  }
  
}
  


