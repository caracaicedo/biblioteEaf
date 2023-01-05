import { parametrosDTO } from "./parametros.model";

export class Session {
    public token: string;
    public uuid: string;
    public propiedades: parametrosDTO[]
}
