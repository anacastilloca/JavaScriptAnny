/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */
var pswB = require('machinepack-passwords');
module.exports.bootstrap = function(cb) {
  //console.log("Antes de levantar")
  cb(); //Aquí se levante el sails
  /*Usuario.findOne({
    correo:"am@d.com"
  }).exec(function (err,usuarioEncontrado) {
    if(err) cb("error");
    if (!usuarioEncontrado){
      cb("No existte el usuario")
    }else {
      if(usuarioEncontrado.contrasenia=="mm"){
        console.log("No ha aplicado el hash");
        cb();
      }else {
        console.log("Aplicar hash");
        pswB.encryptPassword({
          password: usuarioEncontrado.contrasenia,
        }).exec({
          error: function (err) {
            cb("Error de encriptacion")
          },
          success: function (pwsDeUnUsuario) {
            Usuario.update({
              id:usuarioEncontrado.id
            },
              {
                contrasenia:pwsDeUnUsuario
              }).exec(function (err,usuarioActualizado) {
              if(err) return cb();
              if(!usuarioActualizado){
                cb("Usuario no actualizado")
              }else {
                console.log("Sails levantado");
                cd();
              }
            })
          },
        });

      }
    }
  })

  //cb(); //para que se levante el sails..solo se llama una sola vez
*/
};
