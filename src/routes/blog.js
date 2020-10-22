const express = require('express');
const {body} = require('express-validator');

const router = express.Router();

const blogController = require('../controllers/blog');

// {POST} : /v1/blog
router.post('/create', [body('title').isLength({min: 5}).withMessage('input tidak sesuai'), body('body').isLength({min: 5}).withMessage('input tidak sesuai')], blogController.createBlogPost);

// {GET} : /v1/blog
router.get('/posts', blogController.getAllPost);
router.get('/post/:postId', blogController.getPostById);

module.exports = router;