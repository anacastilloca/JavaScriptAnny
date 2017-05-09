/**
 * Created by USRDEL on 5/9/17.
 */
// FAT ARROW FUNCTIONS
//funciones anonimas
var hola= function(){console.log("Como estas")}
hola()

var hola2=()=>{return "Como estass2"}
hola2()

//Se puede devolver funciones. "Como estasss3" Este mensaje iba antes de hola2()
var hola3=()=> hola2()
hola3()

var hola4=(nombre)=> `Hola: ${nombre}`
hola4('Pedro')

//Cuando hay mas de un parametro se utiliza () de los parametros
var hola5=apellido=> `Hola: ${apellido}`
hola5('Perez')

var hola6=(nombre,apellido)=> `Señor: ${nombre} ${apellido}`
hola6('Jorge','Perez')


