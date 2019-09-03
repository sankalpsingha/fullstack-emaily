const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');

require('./models/User');
require('./services/passport');

mongoose.connect('mongodb://localhost:27017/dummyapp', {
	useNewUrlParser: true
});

const app = express();

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: ['asdfasdfkljljio'] // Dont forget that it is an array. I was getting error because of missing []
	})
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

// Client ID : 753072730364-nvud28ebqmvjt4flabhqt6s4ch09oa3o.apps.googleusercontent.com
// Client Secret : OJGJmk_c9_RWkWhukZTuv192

app.listen(5000);
