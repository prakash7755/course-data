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
	language: { type: String, required: requiredFieldMessage('Language')},
	country: {type: String, required: requiredFieldMessage('Country')},
	title:  { type: String, required: requiredFieldMessage('Title')},
	author:  { type: String, required: requiredFieldMessage('Author')},
	pages:  { type: Number, required: requiredFieldMessage('Pages')},
	link: String,
	imageLink: String
}, options)

module.exports = mongoose.model('tabledatas', tableData);
