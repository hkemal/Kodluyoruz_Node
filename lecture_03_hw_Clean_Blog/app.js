const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejs = require('ejs');
const path = require('path');
const { response } = require('express');
const Post = require('./models/Post');
const postController = require('./controllers/postController');
const pageController = require('./controllers/pageController');

const app = express();

//connect DB
mongoose.connect('mongodb://localhost/cleanblog-test-db ', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//Posts
app.get('/', postController.getAllPosts);
app.get('/posts/:id', postController.getPost);
app.post('/posts', postController.createPost);
app.put('/posts/:id', postController.updatePost);
app.delete('/posts/:id', postController.deletePost);

//Pages
app.get('/about', pageController.aboutPage);
app.get('/add', pageController.addPage);
app.get('/posts/edit/:id', pageController.editPage);

const port = 3001;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatildi`);
});
