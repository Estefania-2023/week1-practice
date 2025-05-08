const routes = require('express').Router();
const lesson1controller = require('../controllers/lesson1.js');
 
routes.get('/', lesson1controller.SarahRoute);

routes.get('/Hannah', lesson1controller.HannahRoute);

module.exports = routes;