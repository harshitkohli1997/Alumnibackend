/*
function isAuthenticated(req, res, next) {
    if (req.user.authenticated)
        return next();

    res.redirect('/');
}


module.exports = {
    ensureAuthenticated:function(req,res,next){
        //if(!req.isAuthenticated()){
            next();
        //}
       // res.redirect('/');
    },
    ensureGuest:function(req,res,next){
        //if(!req.isAuthenticated()){
             next();
        //}else {
          //  res.redirect('/dasboard');
        //}
    }
}*/

function ensureAuthenticated (req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
module.exports ={ensureAuthenticated};