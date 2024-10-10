const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
require('dotenv').config();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

connectDB().then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log('Server started on port 5000');
  });
});