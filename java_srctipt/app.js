/**
 * Created by USRDEL on 5/3/17.
 */
console.log("Holaaa inicio de js");

//Para imprimir los datos de una misma funcion this o nomObjeto.atributo
//ejemplo Ana.nombre
var Ana = {
    nombre: "Ana",
    apellido: "Castillo",
    fechaActual: new Date(),
    imprimir:function () {
        console.log("Mjssss", this.nombre);
    },
    anio:function () {
        console.log(this.fechaActual.getFullYear() - 1994);
        return this.fechaActual.getFullYear()  - 1994;
    },
    diferenciaEdad: function (edadComparar) {
        //return Math.abs(this.fechaActual.getFullYear()-edadComparar);
    }
}
//Ejecutar las funciones/metodos
//Ana.imprimir();
//Ana.anio();
console.log(Ana.diferenciaEdad(2010));
