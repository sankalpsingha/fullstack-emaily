const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.use(
	new GoogleStrategy(
		{
			clientID:
				'753072730364-nvud28ebqmvjt4flabhqt6s4ch09oa3o.apps.googleusercontent.com',
			clientSecret: 'OJGJmk_c9_RWkWhukZTuv192',
			callbackURL: '/auth/google/callback'
		},
		(accessToken, refreshToken, profile, done) => {
			new User({
				googleId: profile.id
			}).save();
		}
	)
);
