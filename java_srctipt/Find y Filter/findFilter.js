/**
 * Created by USRDEL on 5/10/17.
 */
//Find y Filter
//Operador find devuelve valor o undefined

let arreglo =[1,2,3,4,5,6,7,8,9]
let notasSuple = arreglo.map((valor,indice)=>{
    return valor/5;
})
    .filter((valor)=>{
        return valor<1;
    })
//.find((valor)=>{
//	return valor==0,3
//});
console.log(notasSuple)