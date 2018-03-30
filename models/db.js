'use strict';
const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost/tableData`)
   .then(data => {
   	console.log(`Data Base Now Connected`)
   })
   .catch(error => {
   	console.log(`DB not Connected`)
   })


 module.exports = mongoose;