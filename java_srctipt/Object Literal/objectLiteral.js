/**
 * Created by USRDEL on 5/10/17.
 */
//Object literal
function definirObjetoUsuario(nombre){
    return {
        nombre:nombre,
        saludar:function(){
            return "Hola"+this.nombre;
        },
        twitteo:function(tweet){
            return this.nombre+" twitteo sobre: "+tweet;
        },
    }
}

function definirObjetoUsuarioObjectLiterals(nombre){
    return {
        nombre,
        saludar(){
            return "Hola"+this.nombre;
        },
        twitteo(tweet){
            return this.nombre+" twitteo sobre: "+tweet;
        },
    }
}

var nuevaFuncion=(nombre,apellido)=>{
    var usuario1={
        nombre:nombre,
        apellido
    };
    alert(usuario1.nombre+usuario1.apellido);//con console.log se imprime en la consola de chrome

    var usuario2={
        nombre
    }
    console.log(usuario2.nombre);
}
//nuevaFuncion('Ana','Castillo');


//
