//creacion de un servidor http con express

let express = require('express');
const PORT = 80;
let app = express();
app.listen(PORT, function() {
    console.log("My http server listening on port " + PORT + "...");
});
app.get('/foo', function(req, res) {
    console.log('Hello, I am foo.');
});