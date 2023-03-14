const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth.js');
const userRoute = require('./routes/users.js');
const postRoute = require('./routes/posts.js');
const categoryRoute = require('./routes/categories.js');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
dotenv.config();

app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '/images')));

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL, () => {
  console.log('Connected to MongoDB');
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded');
});

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);

app.listen('5000', () => console.log(`server is running ....`));
