const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const { response } = require('express');
const Post = require('./models/Post');

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

app.get('/', async (req, res) => {
  const posts = await Post.find({});
  res.render('index', {
    posts,
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add', (req, res) => {
  res.render('add_post');
});

app.post('/posts', async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
});

const port = 3001;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatildi`);
});
