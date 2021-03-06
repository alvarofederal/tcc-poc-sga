const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');
const routes   = require('./routes');
const app      = express();

mongoose.connect('mongodb://mongo:27017/sca', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then( function() {
    console.log('MongoDB is connected');
}).catch( function(err) {
    console.log(err);
});

app.use(cors({ origin: 'http://localhost:3000'}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

app.listen(3339);