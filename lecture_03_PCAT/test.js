const mongoose = require('mongoose');

const Schema = mongoose.Schema;
mongoose.set('strictQuery', false);

//connect DB
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

// create a photo
// Photo.create({
//   title: 'Photo Title 1',
//   description: 'Photo description 1 lorem ipsum',
// });

//read a photo
// Photo.find({}, (err, data) => {
//   console.log(data);
// });

//update a photo
//  const id = '63d0e76523a0078e416f143e';
// Photo.findByIdAndUpdate(
//   id,
//   {
//     title: 'Photo Title 111 updated',
//     description: 'Photo description 111 lorem ipsum updated',
//   },
//   {
//     new: true,
//   },
//   (err, data) => console.log(data)
// );

//delete a photo
// const id = '63d0e9e46e4871faaa78584b';
// Photo.findByIdAndDelete(id, (err, data) => {
//   console.log('Photo is removed...');
// });
