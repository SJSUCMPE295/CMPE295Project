const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.use(
    new GoogleStrategy(
        {
            clientID: '1091849321584-khhu71os6seu5ip8t8qbfot74gqs4o69.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: 'http://localhost:8500/auth/google/callback',
            passReqToCallback: true,
        },
        function (request, accessToken, refreshToken, profile, done) {
            User.findOrCreate({ googleId: profile.id }, function (err, user) {
                return done(err, user);
            });
        }
    )
);
