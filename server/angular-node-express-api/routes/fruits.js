var express = require('express');
var router = express.Router();
var CustomerService = require('../services/service_customer');
var fruits = require('../models/fruits');


/* retrieves a customer by uid */
router.get('/', async (req, res, next) =>
{
	try
	{
		return res.json(fruits);
	}
	catch(err)
	{
		// unexpected error
		return next(err);
	}
});

module.exports = router;