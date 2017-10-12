const path = require('path');
const userModel = require('../models/user-model');
const userService = require('../services/user-service')(userModel);
const addFunction = require('../services/test')();


module.exports = userController;

function userController() {

    return {
        getAllUser: getAllUser,
        postUser: postUser, 
        add: add
    };

    function add (req, res) {
        var result = addFunction.add(2, 3);
        res.status(200).json(result);
    }

    function getAllUser(req, res) {
        userService
            .getAllUser(req, res)
            .then (users => {
                res.status(200).json(users);
            })
            .catch(error => {
                res.status(500).send('Error Getting All Users!');
            })
    };

    function postUser (req, res) {
        userService
            .postUser(req.body)
            .then(user => {
                res.status(200).send('Inserting User To Database Success!');
            })
            .catch(error => {
                res.status(500).send('Inserting User To Database Error!');
            })
    };
};