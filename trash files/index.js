var express           =     require('express');
var localauth = require('./authentication')
    ,career = require('../routes/career')
    , input = require('../routes/input')
    ,router = express.Router()
    ,users = require("../controllers/users")
    ,auth =require("./middlewares/auth")
    ,passport =require('passport')
    ,auth = require('../routes/auth')



router.use('/', localauth);
router.use('/',career);
router.use('/',input);


    router.get('/login', users.login);
    router.get("/logout", users.logout);
    router.get('/register', users.register);

    router.get('/createaccount', users.createaccount);

    router.get('/loginuser', users.loginpage);


//Strategy Call
   /* router.get('/auth/facebook',
        passport.authenticate('facebook', {scope : ['email','user_gender']})
    );
*/
///router.get('/auth/facebook', passport.authenticate('facebook',{scope:'email'}));


router.get('/auth/linkedin',
        passport.authenticate('linkedin', {failureRedirect: "/"}),
        users.signin
    );
router.post(
    "/signup",
    passport.authenticate("local",
        {
            failureRedirect: "/",
            failureFlash: "Invalid email or password"
        }),
    users.session
);

//Auth Callback
    router.get('/auth/facebook/callback',
        passport.authenticate('facebook', {failureRedirect: '/'}),
        function(req,res) {
        res.render("Login/createaccnt")
        }
    );

    router.get('/auth/linkedin/callback',
        passport.authenticate('linkedin', {failureRedirect: '/'}),
        users.createaccount
    );
function ensureAuthenticated (req, res, next){
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('Login/createaccnt')
}
   /* router.use(auth.ensureAuthenticated);

    router.use((req, res) => {
        res.status(404).render("pages/404", {
            url: req.originalUrl,
            error: "Not found"
        });
    });
*/

module.exports = router;