export interface ValidaAcesso{
    //PARÂMETROS
    matricula: string;
    senha: string;

    //COLUNAS
    nome: string;
    nomeAbrev:string;
    email: string;
    ctrCodigo:number
    ctrDescricao: string;
    cgoDescricao:string;
    acessoVal: boolean;
    msgAcesso: string;
}