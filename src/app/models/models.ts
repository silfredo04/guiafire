export interface UserI {
    uid:string;
    correo:string;
    password:string;
    perfil:'visitante'|'coordinadores',
}