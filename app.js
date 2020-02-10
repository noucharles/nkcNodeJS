const express = require('express');
const Router = require('./src/routes/userRoutes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userSchema = require('./src/models/userModel');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/user',Router);

app.get('/', (req, res) => res.send('Hello World!'));


url = 'mongodb://localhost:27017/test';
options = {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
  };
mongoose.connect(url,options);


mongoose.connection.on('connected', () => 
    console.log('[MongoDB] is running on port 27017')
);
mongoose.connection.on('disconnected', () => 
    console.warn('[MongoDB] is not connected')
);
mongoose.model('user', userSchema.schema);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

