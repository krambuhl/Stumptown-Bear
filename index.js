var express = require('express');
var app = express();
var path = require('path');

//app.use(express.static(__dirname)); // Current directory is root
app.use(express.static(path.join(__dirname, 'proto/dist'))); //  "public" off of current is root

app.listen(process.env.PORT || 8080);
