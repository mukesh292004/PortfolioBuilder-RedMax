const mongoose = require('mongoose');
const connection=mongoose.connect('mongodb://127.0.0.1:27017/redmax').then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});
module.exports=connection;