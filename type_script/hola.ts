/**
 * Created by USRDEL on 5/16/17.
 */
/*let hola= `Como vas`;
console.log("HOLAAA");*/

//let soltero: boolean="aaa"; ya no se puede igualar a lo que se quiera
let soltero: boolean=true;//false
//number
let num=2;
//string
let frase="Holaaaa otra vez";
//Concatenar
let otrafrease= `Cuntas veces has dicho hola: ${num+3}`;
//Arrays
let notas: number[]=[1,2,3,4,5] //[]
let reprobada:Array<number>=[1,2,3,4,5,6]//[]
//Con any se puede simular  los tipo de datos de java script
//con eso podemos igualar nombre=12 sin error..
let nombre:any="aa";
nombre=12;

//Objeto
let usuario:UsuarioLogin={
    nombre:"Anny",
    apellido:"Castillo",
    direccion:"sss2" //Este es un parametro opcional puede estar como no
}
interface UsuarioLogin{
    nombre:string,
    apellido:string,
    //para que sea opcional se pone ?
    direccion?:string
}
//Clases
class Persona{
    //es public por defecto
   //ATRIBUTOS
    nombre:string="Daniela";
    private apellido:string="Castillo";
    fechaDeNacimiento: Date;
    //No se define parametros opcionales al inicio siempre al final ?
    //CONSTRUCTOR
    constructor(nombre?: string, apellido?: string, fechaDeNacimiento?: Date) {
        /*this.nombre = nombre;
        this.apellido = apellido;
        this.fechaDeNacimiento = fechaDeNacimiento;*/
    }
    //public imprimirPersona():void{
    //: significa definir el tipo de objeto
    public imprimirPersona():UsuarioLogin{
        console.log(this.nombre,this.apellido);
        this.imprimirNombre("Maria");
        return {
            nombre:this.nombre,
            apellido:this.apellido
        }
    }
    private imprimirNombre(nombre:string,apellido?:string):void{
        if(apellido){
            console.log(nombre,apellido);
        }else {
            console.log("Nombre: ",nombre);
        }
    }
}
//Instanciacion de la clase
let anny:Persona = new Persona();
anny.imprimirPersona();
anny.fechaDeNacimiento=new Date();
console.log(anny.fechaDeNacimiento);