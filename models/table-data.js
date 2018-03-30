'use strict';
const mongoose = require('mongoose');
const uuid = require('uuid');
const Schema = mongoose.Schema;
const options = {
	timestamps: true
}

const requiredFieldMessage = (field) => {
    const message = `${ field } Should Not Be Empty`
    return [true, message];
}

const tableData = new Schema({
	id: {type: String, default: uuid},
	course: { type: String, required: requiredFieldMessage('Course')},
	title:  { type: String, required: requiredFieldMessage('Title')},
	author:  { type: String, required: requiredFieldMessage('Author')},
	description:  { type: String, required: requiredFieldMessage('Description')},
}, options)

module.exports = mongoose.model('tableDatas', tableData);
