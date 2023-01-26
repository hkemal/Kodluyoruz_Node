const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('strictQuery', false);

//create schema
const PostSchema = new Schema({
  title: String,
  detail: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Post', PostSchema);

// Post.create({
//   title: 'Title 1',
//   detail: 'Detail 1',
// });

// Post.create({
//   title: 'Title 2',
//   detail: 'Detail 2',
// });

// Post.create({
//   title: 'Title 3',
//   detail: 'Detail 3',
// });

module.exports = Post;
