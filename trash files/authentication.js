var express           =     require('express')
    , passport          =     require('passport')
    , FacebookStrategy  =     require('passport-facebook').Strategy
    , config            =     require('../configuration/config')
    , LinkedInStrategy = require('passport-linkedin-oauth2').Strategy
    ,nodemailer = require('nodemailer')
    ,passport = require('passport')
    ,LocalStrategy = require('passport-local').Strategy
    ,User = require('../model/user')
    ,router = express.Router()
    ,mongoose = require('mongoose')
    ,users = require('../controllers/users');

router.use(passport.initialize());
router.use(passport.session());

//FacebookStrategy
passport.use(new FacebookStrategy({
        clientID: config.facebook_api_key,
        clientSecret:config.facebook_api_secret ,
        callbackURL: config.facebook_callback_url
    },
    function(accessToken, refreshToken, profile, done) {
        const userFieldSet = 'id, name, about, email, accounts, link, is_verified, picture, ';
  console.log(profile);

       /*  const options = {
            method: 'GET',
            uri: `https://graph.facebook.com/v2.8/${profile.id}`,
            qs: {
                access_token: accessToken,
                fields: userFieldSet
            }
        };
            request(options)
            .then(fbRes => {
                res.json(fbRes);
            })
*/

        const user = {
            'name' : profile.displayName,
            'id'   : profile.id,
            'email' : profile.email,
            'gender': profile.gender,
            'token': accessToken
        };

        User.load(options, (err, user) => {
            if (!user) {
                user = new User({
                    name: profile.displayName,
                    // email: profile.emails[0].value,
                    profileimage: profile.profileimage,
                    provider: "facebook",
                    facebook: profile._json
                });
                user.save(err => {
                    if (err) console.log(err);
                    return done(err, user);
                });
                users.mail();
            } else {
                User.findOne({name: profile.displayName}, function (err, user) {
                    user.facebook = profile._json;
                    user.save();
                    return done(err, user);
                });
            }
        });


        process.nextTick(function () {
            return done(null, user);
        });
    }
));

//Linkedin Strategy
passport.use(new LinkedInStrategy({
        clientID: config.linkedin_api_key,
        clientSecret:config.linkedin_api_secret ,
        callbackURL: config.linkedin_callback_url
    },
    function(token, tokenSecret, profile, done) {
        console.log(profile);
       users.mail();
        User.findOrCreate({ linkedinId: profile.id }, function (err, user) {
            return done(err, user);
        });
    }
));

//Local Strategy
passport.use(new LocalStrategy(function(useremail, password, done){
    User.getUserByEmail(useremail, function(err, user){
        if(err) throw err;
        if(!user){
            return done(null, false, {message: 'Unknown User'});
        }

        User.comparePassword(password, user.password, function(err, isMatch){
            if(err) return done(err);
            if(isMatch){
                return done(null, user);
            } else {
                return done(null, false, {message:'Invalid Password'});
            }
        });
    });
}));





// Passport session setup.
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});


module.exports = router;

