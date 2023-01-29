const express = require('express');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.route('/signup').post(categoryController.createCategory);

module.exports = router;
