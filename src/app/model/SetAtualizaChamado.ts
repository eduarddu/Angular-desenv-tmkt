import { DateType } from "devextreme/ui/date_box";

export interface AtualizaChamado{
    chaCodigo: number;
    status: string;
    agtCodigo: string;
    prazo: Date;
}