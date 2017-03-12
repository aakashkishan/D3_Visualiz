//Include the Express Framework.
var express = require('express');
var app = express();

app.set('port', process.env.PORT || 4000);

app.use(express.static('public'));

app.get('/', function(request, response) {
    res.send(__dirname + '/public/index.html');
})

app.listen(4000, function() {
    console.log("Listening at port number: 4000")
})


