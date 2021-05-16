/*******************************************************************************
 * Feel free to remove this comment block and all other comments after pulling. 
 * They're for information purposes only.
 * 
 * This layout is provided to you for an easy and quick setup to either pull
 * or use to correct yours after working at least 1 hour on Team Activity 02.
 * Throughout the course, we'll be using Express.js for our view engines.
 * However, feel free to use pug or handlebars ('with extension hbs'). You will
 * need to make sure you install them beforehand according to the reading from
 * Udemy course. 
 * IMPORTANT: Make sure to run "npm install" in your root before "npm start"
 *******************************************************************************/
// Our initial setup (package requires, port number setup)
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes');
const User = require('./models/user');
const PORT = process.env.PORT || 5000 // So we can run on heroku || (OR) localhost:5000

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
      User.findById('60a0956e5a14e34988130c26')
         .then(user => {
            req.user = user;
            next();
         })
         .catch(err => console.log(err));
   });
app.use('/', routes);
mongoose.connect('mongodb+srv://webadmin:kjfF2foda16U4hAm@cluster0.vhpz6.mongodb.net/test?retryWrites=true&w=majority').then(result => {
   User.findOne().then(user => {
      if (!user) {
         const user = new User({
            name: 'Alain',
            email: 'alain@test.com',
            cart: {
               items: []
            }
         });
         user.save();
      }
   });
   app.listen(5000);
}).catch(err => {
   console.log(err);
});