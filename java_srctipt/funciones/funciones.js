/**
 * Created by USRDEL on 5/3/17.
 */

function holaMundo() {
    console.log('Holaa');
}
holaMundo();

// El doble de un entero
function doble(a) {
    return a*2;
}
console.log(doble(5));

//Multiplicacion
function multiplicacion(a,b) {
    return a*b;
}
console.log(multiplicacion(9,4));

//funcion anonima no tiene nombre y no se la puede poner donde sea..solo donde existe
//void cuando se imprime una funcion void devuelve undefined

//definicion de la funcion sin parentisis (hola)
//con parentisis se ejecuta la funcion (hola())

function  hazAlgo(algo) { //parametros que son funciones
    algo()
}
hazAlgo(function () { console.log('Se envia funcion como parametro')});
hazAlgo(function () { return 2});

function transformarNumero(num,transformacion) {
    transformacion(num);
}
transformarNumero(5,function (num) {return num*2});
transformarNumero(8,function (num) {return num/2});


