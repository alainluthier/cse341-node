///*******************************************************************************

// Our initial setup (package requires, port number setup)
const cors = require('cors') // Place this with other requires (like 'path' and 'express')
const express = require('express');
const bodyParser = require('body-parser');
//const csrf = require('csurf');
const flash = require('connect-flash');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes');
const User = require('./models/user');
const PORT = process.env.PORT || 5000 // So we can run on heroku || (OR) localhost:5000

const corsOptions = {
   origin: "https://cse341-alain.herokuapp.com/",
   optionsSuccessStatus: 200
};

const options = {
   useUnifiedTopology: true,
   useNewUrlParser: true,
   useCreateIndex: true,
   useFindAndModify: false,
   family: 4
};

const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://webadmin:kjfF2foda16U4hAm@cluster0.vhpz6.mongodb.net/test?retryWrites=true&w=majority";

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URL,
  collection: 'sessions'
});
//const csrfProtection = csrf();
app.use(cors(corsOptions));


app.set('view engine', 'ejs');
app.set('views', 'views');

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
   session({
     secret: 'my secret',
     resave: false,
     saveUninitialized: false,
     store: store
   })
 );
 //app.use(csrfProtection);
 app.use(flash());
app.use((req, res, next) => {
      User.findById('60a0956e5a14e34988130c26')
         .then(user => {
            req.user = user;
            next();
         })
         .catch(err => console.log(err));
   });
   /*app.use((req, res, next) => {
      res.locals.isAuthenticated = req.session.isLoggedIn;
      res.locals.csrfToken = req.csrfToken();
      next();
    });*/
app.use('/', routes);
mongoose.connect(MONGODB_URL,options).then(result => {
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
   app.listen(PORT);
}).catch(err => {
   console.log(err);
});





