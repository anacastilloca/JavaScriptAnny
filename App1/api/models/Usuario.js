/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */



var pswU = require('machinepack-passwords');
module.exports = {
  connection: 'conexionMySqlDocker',
  attributes: {
    nombre: {
      type: 'string'
    },
    correo: {
      type: 'email'
    },
    contrasenia: {
      type: 'string',
     required:true
    },
    dueniosMascotas: {
      collection: 'UsuarioMascota',
      via: 'idUsuario'
    }
  },
  //http://sailsjs.com/documentation/concepts/models-and-orm/lifecycle-callbacks
  beforeCreate: function (usuario, cb) {
    //sails.log.info("Usuario",usuario);
    //usuario.nombre="Ana"; Estos valore persisten cuando se crea un usuario
    //usuario.contrasenia="123456";
    //if(usuario.contrasenia) {
      pswU.encryptPassword({
        password: usuario.contrasenia,
      }).exec({
        error: function (err) {
          cb("Error en hash contraseña", err)
        },
        success: function (hashedContrasenia) {
          usuario.contrasenia = hashedContrasenia
          cb();
        },
      });
    /*}else {
      cb()
    }*/
  },
  //http://localhost:1337/Usuario/update/5?contrasenia=123456789
  beforeUpdate:function (valorActualizar,cb) {
    if(valorActualizar.contrasenia) {
    pswU.encryptPassword({
      password: valorActualizar.contrasenia,
    }).exec({
      error: function (err) {
        cb("Error en hash contraseña", err)
      },
      success: function (hashedContrasenia) {
        valorActualizar.contrasenia = hashedContrasenia
        cb();
      },
    });
    }else {
     cb()
     }
  }
}
