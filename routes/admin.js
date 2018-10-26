const express  = require('express')
    ,router = express.Router()
    ,mongoose = require('mongoose');
const User = mongoose.model('User');
const Admin = mongoose.model('Admin');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


// router.post('/adminhome' ,passport.authenticate('local',{failureRedirect:'/'}), (req,res)=> {

//    /* const newAdmin = {
//         username: req.body.username,
//         password: req.body.password
//     }*/


//    // res.render('admin/adminhome')
//     res.redirect('/adminhome'   );
// })


// router.get('/adminhome', (req,res) => {

//     res.render('admin/adminhome')
// });

// router.get('/admin',(req,res)=>{
//    res.render('admin/adminlogin')
// });
// router.get('/adminactive', (req,res)=> {
//     console.log('return function');
//     User.find({})
//         .then(result => {
//             res.render('admin/adminactive', {
//                 result:result


//             })
//         })
// });



// passport.use(new LocalStrategy(
//     function(username, password, done) {
//         Admin.findOne({
//             username: username
//         }, function(err, adminuser) {
//             if (err) {
//                 return done(err);
//             }

//             if (!adminuser) {
//                 return done(null, false);
//             }

//             if (adminuser.password !== password) {
//                 return done(null, false);
//             }
//             return done(null, adminuser);
//         });
//     }
// ));

// passport.deserializeUser((id,done)=>{
//     Admin.findById(id).then(user => done (null,user));
// });


module.exports = router;
