const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8080;
const app = express();
app.set("port", PORT);


// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT ,function(){
  console.log("up and running on port "+PORT);
});