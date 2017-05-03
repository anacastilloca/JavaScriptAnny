/**
 * Created by USRDEL on 5/3/17.
 */
//Variable.js
//En javascript se define una variable con la palabra reservada <var>

// Enteros
var dos=2
var tres=3
var quince=15
var diezYsiete=17;
console.log(dos);
console.log(tres);
console.log(quince);
console.log(diezYsiete);

//Float
var dosPuntoCinco=2.5;
console.log(dosPuntoCinco);

//Todas las demas
var verdaderoOfalso=true;
var falso=falso;
var nombre='Anny';
var negativo=-2;
var fecha= new Date();
var cuatroString='4';
cuatroString=4;
cuatroString=true;
cuatroString=false;
cuatroString=-6;
cuatroString= new Date();
cuatroString=undefined;
cuatroString=false;
// undefined, null y cero son falsos
var variable=1;
console.log(typeof variable);

//Objetos Json (llaves....luevo pares (clave- valor))
var ana= {
    id:1,
    nombre:'Ana',
    createdAt: new Date(),
    upadtedAt: new Date(),
    casado:false,
    prestamos:true,
    hijos:null,
    altura:1.53,
    negativo:-3,
    mascota:{
        nombre:'pipo',
        fechaNacimiento: new Date()
    }
}
console.log(ana+"aaa"); //esto imprime el objeto del objeto
console.log(ana,"BBB"); // con coma se imprime el contenido del objeto
console.log("ALTURA",ana.altura); // imprimer cada atributo del objeto
ana.altura=1.4;
console.log("ALTURA",ana.altura);
console.log(ana.mascota.nombre); // para acceder a los datos del objeto del objeto
ana.altura = {
    ancho:2.4,
    alto:1.65
}
console.log(ana.altura);

delete ana.altura; //para borrar atributos del objeto
console.log("Ojeto",ana);

ana.juegos='muchos'; // para agregar atributos a un objeto
console.log("Objeto",ana);

//ARREGLOS
var arreglos = ['aa',1,1.3,false,true,null,new Date(),-3,undefined,{aa:'aa'}];
console.log(arreglos[3]);
var objetoconArreglo = {
    papas:['a','b','s'],
    cebollas:['m','n','o']
}
console.log(objetoconArreglo.papas[1]);

var matriz = [[0,1],[2.3]];
console.log(matriz[0][0]);

var arreglosConObjetos =[
    {
        id:1
    },
    {
        nom:'holaa'
    }
];
console.log('Antes',arreglosConObjetos);
arreglosConObjetos.splice(1,1); //splice primer parametro posicion en la que se va trabajar
                                // el segundo parametro numero de objetos a borrar
console.log('Despues',arreglosConObjetos);
arreglosConObjetos.splice(0,0,{id:2});
console.log("Agregar",arreglosConObjetos);

    arreglosConObjetos.splice(0,1);
     console.log("Agregarss",arreglosConObjetos);






