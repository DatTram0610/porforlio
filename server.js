const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');


const port = process.env.PORT || 8080;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017');

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination')
        process.exit(0)
    })
})


app.use(bodyParser.json());

app.use(require('./app/routes'));

app.use(
    '/public',
    express.static(path.join(__dirname, 'public'), {
        fallthrough: false
    })
);

app.listen(port, () => {
    console.log(`Magic is happening at ${port}`);
});