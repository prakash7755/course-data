'use strict';
const bcrypt = require('bcrypt');
const saltRounds = 10;

function hashPassword(data){
  return bcrypt.hashSync(data, saltRounds);
};

function comparePassword(plainPassword, hash){
	return bcrypt.compareSync(plainPassword, hash);
};

module.exports = {
	hashPassword,
	comparePassword
}
