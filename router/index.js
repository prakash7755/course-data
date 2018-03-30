'use strict';

const user = require('./user');
const tableData = require('./table-data');
const bodyParser = require('body-parser');
const { tokenServ } = require('../service');



function routes(app){
  
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.use('/auth', user);
  
  app.use('/api/', (req, res, next) =>{
    const token = (req.headers || {}).authorization;
    if (!token) {
      return res.status(401).json({message: "User Not authorized"});
    }
    let decodedToken;
    try{
      decodedToken = tokenServ.verify(token);
      next();
    }
    catch(error){
      next(error);
    }
  })

  app.use('/api', tableData);
   
   /*
    * Error Handling
    */
  app.use((error, req, res, next) =>{
  	const { message, status } = error || {};
  	 res.status(status || 500).json({ message });
  })
}


module.exports = routes;