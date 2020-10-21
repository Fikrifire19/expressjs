const express = require('express');
const {body} = require('express-validator');

const router = express.Router();
const blogController = require('../controllers/blog');

router.post('/create', [body('title').isLength({min: 5}).withMessage('input tidak sesuai'), body('body').isLength({min: 5}).withMessage('input tidak sesuai')], blogController.createBlogPost);

module.exports = router;