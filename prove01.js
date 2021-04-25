
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 3000 // So we can run on heroku || (OR) localhost:5000

const app = express();

// Route setup. You can implement more in the future!
const prove01 = require('./prove01-routes');

app.use(express.static(path.join(__dirname, 'public')))
   
   .use('/', prove01)
   
   .listen(PORT, () => console.log(`Listening on ${ PORT }`));
