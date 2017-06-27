/**
 * UsuarioMascota.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

//Tabla de dueños de mascotas
module.exports = {

  attributes: {
    idUsuario:{
      model:'Usuario' //Tabla papá
    },
    idMascota:{
      model:'Mascota' //Tabla papá
    },
    fechaDeAdapcion:{
      type:'date'
    },
    fechaDeFinalizacionAdopcion:{
      type:'date'
    }

  }
};

