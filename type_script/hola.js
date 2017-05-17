/**
 * Created by USRDEL on 5/16/17.
 */
/*let hola= `Como vas`;
console.log("HOLAAA");*/
//let soltero: boolean="aaa"; ya no se puede igualar a lo que se quiera
var soltero = true; //false
//number
var num = 2;
//string
var frase = "Holaaaa otra vez";
//Concatenar
var otrafrease = "Cuntas veces has dicho hola: " + (num + 3);
//Arrays
var notas = [1, 2, 3, 4, 5]; //[]
var reprobada = [1, 2, 3, 4, 5, 6]; //[]
//Con any se puede simular  los tipo de datos de java script
//con eso podemos igualar nombre=12 sin error..
var nombre = "aa";
nombre = 12;
//Objeto
var usuario = {
    nombre: "Anny",
    apellido: "Castillo",
    direccion: "sss2" //Este es un parametro opcional puede estar como no
};
//Clases
var Persona = (function () {
    //No se define parametros opcionales al inicio siempre al final ?
    //CONSTRUCTOR
    function Persona(nombre, apellido, fechaDeNacimiento) {
        //es public por defecto
        //ATRIBUTOS
        this.nombre = "Daniela";
        this.apellido = "Castillo";
        /*this.nombre = nombre;
        this.apellido = apellido;
        this.fechaDeNacimiento = fechaDeNacimiento;*/
    }
    //public imprimirPersona():void{
    //: significa definir el tipo de objeto
    Persona.prototype.imprimirPersona = function () {
        console.log(this.nombre, this.apellido);
        this.imprimirNombre("Maria");
        return {
            nombre: this.nombre,
            apellido: this.apellido
        };
    };
    Persona.prototype.imprimirNombre = function (nombre, apellido) {
        if (apellido) {
            console.log(nombre, apellido);
        }
        else {
            console.log("Nombre: ", nombre);
        }
    };
    return Persona;
}());
//Instanciacion de la clase
var anny = new Persona();
anny.imprimirPersona();
anny.fechaDeNacimiento = new Date();
console.log(anny.fechaDeNacimiento);
//FUNCIONES
function SumarNumeros(num1, num2) {
    return num1 * num2;
}
// Codigo java script en java Script
var objeto = {
    nombre: "aa",
    imprimirNombre: function () {
        return this.nombre;
    }
};
