//start.js
//Hordiednko Dmytro SMP Lab2
const app = require('./server.js');
const config = require('./config.js');

app.listen(config.get('port'));

