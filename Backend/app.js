const express = require('express');
const connection = require('./connection');
const bodyParser = require('body-parser');
require('dotenv').config();
const authRoutes = require('./routes/Auth');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
