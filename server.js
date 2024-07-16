const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const profile = require('./routes/profile');

const app = express();

// Body parser middleware (single instance for both URL-encoded and JSON)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = 'mongodb+srv://your-username:your-password@your-cluster.mongodb.net/your-database?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose
  .connect(db, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/profile', profile);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));