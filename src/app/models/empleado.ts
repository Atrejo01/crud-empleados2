export interface Empleado{
    _id?: string,            //<<<
    nombre: string,
    puesto: string,
    email: string,
    sueldo: number,
    createdAt?: string,      //<<<
    updateAt?: string        //<<<
}