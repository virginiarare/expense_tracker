const routes = require('express').Router();
// const controller = require('../controller/controller');

routes.route('/api/categories')
    .get((req, res) => res.json("Get request from categories"));

module.exports = routes;  
