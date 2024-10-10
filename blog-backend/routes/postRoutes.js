const express = require('express');
const router = express.Router();
const { createPost, getPosts, getPost, updatePost, deletePost } = require('../controllers/postController');
const { verifyToken } = require('../middleware/authMiddleware');

router.post('/create', verifyToken, createPost);
router.get('/all', getPosts);
router.get('/:id', getPost);
router.put('/:id', verifyToken, updatePost);
router.delete('/:id', verifyToken, deletePost);

module.exports = router;