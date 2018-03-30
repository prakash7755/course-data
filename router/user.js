'use strict';
const express = require('express');
const router = express.Router();
const { user } = require('../models');
const { tokenServ, bcryptServ } = require('../service');



router.route('/signup')

    .post(async(req, res, next) => {
        const password = await bcryptServ.hashPassword(req.body.password)
        req.body.password = password;
        const User = new user(req.body);
        try {
            const result = await User.save()
            const token = tokenServ.signToken(result.uuid)
            res.json(token);
        } catch (error) {
            next(error)
        }
    })




router.route('/login')

    .post(async(req, res, next) => {
        const { email, password } = req.body;
        try {
            const result = await user.findOne({ email })
            if (!result) {
                return res.json({ message: 'Worng EmailId' });
            }
            const passwordResult = await bcryptServ.comparePassword(password, result.password);
            if (!passwordResult) {
                return res.json({ message: 'Worng password' });
            }
            const token = tokenServ.signToken(result.uuid);
            res.json(token);

        } catch (error) {
            next(error)
        }
    })


module.exports = router;