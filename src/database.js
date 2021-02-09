const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/simplejwt', {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then(db => console.log('db is connected'))
    .catch(err => console.error(err));