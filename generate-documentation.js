var Dgeni = require('dgeni');

var dgeni = new Dgeni([require('./dist/main')]);

console.log(dgeni.generate());