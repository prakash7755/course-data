'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuid');
const options = {
	timestamps: true
};

const requiredFieldMessage = (field) => {
    const message = `${ field } Should Not Be Empty`
    return [true, message];
};


const user = new Schema({
	id: { type: String, default: uuid },
	userName: { type: String, required:requiredFieldMessage('UserName')},
	mobNumber: { type: Number, required: requiredFieldMessage('Mobile Number')},
	email: { type: String, unique: [true, 'This MailID Already Exist'], required: requiredFieldMessage('Email') },
	password: { type: String, required: requiredFieldMessage('Password')},
	coPassword: { type: String, required: requiredFieldMessage('ConformPassword')},
}, options);


module.exports = mongoose.model('users', user);