/**
 * Created by USRDEL on 5/10/17.
 */
//some parecido a or
//Operador si cumple true y si no false
//Todo el arreglo
//every como el and ..devuelve false si almenos alguno no cumple
//con la condicion

let arreglo =[1,2,3,4,5,6,7,8,9]
let notasSuple = arreglo.map((valor,indice)=>{
    return valor/5;
})
//.some((valor)=>{
//return valor<0.1
//})
    .every((valor)=>{
        return valor>3
    })
console.log(notasSuple)