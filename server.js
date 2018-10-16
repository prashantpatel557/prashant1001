// server.js

const express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
expressJwt = require('express-jwt');

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, '/dist')));

// use JWT auth to secure the api, the token can be passed in the authorization header or querystring





app.all('*', function(req, res) {
    res.sendfile('./dist/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    //res.sendFile('./src/index.html');
});
const server = app.listen(port, function(){
console.log('Listening on port ' + port);
});
