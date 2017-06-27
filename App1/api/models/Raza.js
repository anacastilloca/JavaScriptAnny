/**
 * Raza.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  //Crear registros
  //http://localhost:1337/Raza/create?nombre=Boxer&otrocampo
  //Limit cuantos registros trae (trae dos registros)
  //Skip Se define el numero de registros que se va a saltar el sails (no a a traer 2)
  //http://localhost:1337/Raza?limit=2&skip=2
  attributes: {
    nombre:{
      type:'string'
    },
    listaDeMascotasDeRaza:{
      collection:'Mascota', //Se refiere al nombre del Modelo a relacionar (Hijo)
      via:'idRaza' //Es el nombre del Foreign Key
    }
  }
};

