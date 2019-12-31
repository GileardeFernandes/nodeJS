const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

//Routes Sessions
routes.post('/sessions', SessionController.store);

//Routes Spots
routes.get('/spots',SpotController.index);
routes.post('/spots',upload.single('thumbnail') ,SpotController.store);

//Routes Dashboard
routes.get('/dashboard',DashboardController.show);

//Routes Booking
routes.post('/spots/:spot_id/booking',BookingController.store);

module.exports = routes;