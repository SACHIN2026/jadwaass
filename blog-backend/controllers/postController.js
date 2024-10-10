const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  try {
    const post = new Post({ ...req.body, authorId: req.user.userId });
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(500).send('Server error ');
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('authorId');
    res.json(posts);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('authorId');
    if (!post) return res.status(404).json({ msg: 'Post not found' });
    res.json(post);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!post) return res.status(404).json({ msg: 'Post not found' });
    res.json(post);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).send('Server error');
  }
};