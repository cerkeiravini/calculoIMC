const express = require('express');

const routes = express.Router();

const ImcController = require('./Controllers/ImcController');

routes.get('/:peso/:altura', ImcController.index);

module.exports = routes;
