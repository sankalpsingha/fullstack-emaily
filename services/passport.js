const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(val => {
		done(null, val);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID:
				'753072730364-nvud28ebqmvjt4flabhqt6s4ch09oa3o.apps.googleusercontent.com',
			clientSecret: 'OJGJmk_c9_RWkWhukZTuv192',
			callbackURL: '/auth/google/callback'
		},
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ googleId: profile.id });

			if (existingUser) {
				return done(null, existingUser);
			}
			const user = await new User({ googleId: profile.id }).save();
			done(null, user);
		}
	)
);
