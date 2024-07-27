const express = require('express');
const authRoutes = require('./routes/auth-router');
const passportSetup = require('./config/passport-setup');
const session = require('express-session');
const passport = require('passport');
const app = express();

// set view engine
app.set('view engine', 'ejs');

// setup session
app.use(session({
  secret: 'some random secret',
  resave: false,
  saveUninitialized: true
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);

// create home route
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log('app now listening for requests on port 3000');
});
