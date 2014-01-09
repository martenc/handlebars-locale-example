var express = require("express");
var app = express();

// Apply authentication to server.
// Username: Bane, Password: rip
//app.use(express.basicAuth('Bane', 'rip'));
app.use(express.static(__dirname));
app.get('/', function(req, res) {
    res.send('might wanna goto: <a href=\"/fr\">http://localhost:8080/fr</a>'); 
});


// spin up server
app.listen(process.env.VMC_APP_PORT || 8080, null);

