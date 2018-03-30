'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const { db } = require('./models');
require('./router')(app);




app.listen(port, () =>{
	console.log(`App Listen Port @ ${ port }`);
})