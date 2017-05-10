/**
 * Created by USRDEL on 5/10/17.
 */
//MAP..sirver para transformar el arreglo
//Operador se puede utilizar en los
let arreglo = [9,8,6,5];
//Devuelve arreglos de 2 o de indice o de valor(contenido del arreglo)
let resultado= arreglo.map((valor,indice)=>{
    //return 2;
    //return indice;
    return valor/5;
});
//console.log(resultado)

let arreglo1 = [{
    nombre:"Ana" //Sra. Sr Ana
},
    {
        nombre:"Pedro" //Sr. o Sra Pedro
    }]
//no se pone el indice porque no se utiliza
let resultnom= arreglo1.map((valor)=>{

    return "Sra. o Sr "+valor.nombre
})
console.log(resultnom)
