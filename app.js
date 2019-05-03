const express = require('express');
const api = require('./src/api');
const http = require('http');
const port = process.env.PORT || '3000';

const  app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1', api());

http.createServer(app).listen(port, function() {
    console.log('Express server listening on port ' + port);
}); 

module.exports = app;