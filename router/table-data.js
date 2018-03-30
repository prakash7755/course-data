'use strict';
const express = require('express');
const router = express.Router();
const { tableData } = require('../models')

router.route('/data')

.get(async(req, res, next) =>{
	try{
      const result = await tableData.find()
      res.json(result);
	}
	catch(error){
		next(error)
	}
})


.post(async(req, res, next) =>{
	const TableData = new tableData(req.body)
	try{
	const result = await TableData.save();
	res.json(result)
	}
	catch(error){
		next(error)
	}

})


module.exports = router;