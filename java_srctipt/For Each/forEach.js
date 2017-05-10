/**
 * Created by USRDEL on 5/10/17.
 */
//FOR EACH itera el arreglo
//OPERADORE
//For Each acepta una funcion Y devuelve undefined
let arregloNumeros = [1,2,3,4,5,6];

let resultado=arregloNumeros.forEach((numero,indice)=>{
    console.log(indice,numero)
})

console.log('Resultado: ',resultado)

function arregloForEach(arrayFE,funcion){
    for(let i=0; i<arrayEF.legth;i++){
        //console.log(arrayFE[i])//current value
        //console.log(i) //indice
        //console.log(arrayFE) //arreglo
        funcion(arrayFE[i],i,arrayFE)
    }

}
arregloForEach(arregloNumeros,(valor,indice)=>{
    console.log("Nuevo For Each"+valor)

})