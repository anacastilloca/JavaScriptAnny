/**
 * AutenticacionController
 *
 * @description :: Server-side logic for managing Autenticacions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

//localhost:1337/Autenticacion/logIn
                              //logOut
                              //logInFacebook
//http://localhost:1337/Autenticacion/logIn?correo=am1@d.com&contrasenia=mm

// PARA ENCRIPTAR LA contraseña
//npm install --save machinepack-passwords
var psw = require('machinepack-passwords');

//npm install --save jsonwebtoken   //Para dar los permisos
var jwt=require('jsonwebtoken');

module.exports = {
  logIn:function (req,res) {
    var parametros= req.allParams();
    if (parametros.correo&&parametros.contrasenia){

      Usuario.findOne({
        correo:parametros.correo
      }).exec(function (err,usuarioEncontrado) { //llega un callback, el
        if (err)return res.serverError("Error",err);
        if (!usuarioEncontrado){
          return res.notFound("Usuario no Encontrado");
        }else {

          psw.checkPassword({
            passwordAttempt:parametros.contrasenia,
            encryptedPassword:usuarioEncontrado.contrasenia,
          }).exec({
            error: function (err) {
              return res.serverError(err)
            },
            incorrecto: function (result) {
              return res.badRequest("Datos invalidos")
            },
            success: function (result) {
            var token=  jwt.sign({
                  // exp:Para poner un limite de tiempo para expirar el token
                  exp:Math.floor(Date.now()/1000)+(60*60),
                  data:{
                    id:usuarioEncontrado.id,
                    nombre:usuarioEncontrado.nombre,
                    correo:usuarioEncontrado.correo
                  }
                },
                'esteEsElSecreto'
              );
              return res.ok(token)
            },
          });
          /*if (parametros.contrasenia==usuarioEncontrado.contrasenia){
            return res.ok("Estas Logeado ");
          }else {
            return res.badRequest("Contraseña incorrecta ");
          }*/
         // return res.ok("Encontro el usuario ",usuarioEncontrado)
        }
      });
     // return res.ok("Si enviaste el correo y contraseña");
    }else {
      return res.ok("No enviaste el correo y contrasenia")
    }

  },
  logOut:function (req,res) {

  },
  logInFacebook:function (req,res) {

  }

};

