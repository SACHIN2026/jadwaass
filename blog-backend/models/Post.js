const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: { type: String },
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User ', required: true },
});

module.exports = mongoose.model('Post', PostSchema);