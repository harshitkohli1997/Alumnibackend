const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Info = mongoose.model('Info');
const config = require('../configuration/ensureauth');


router.get('/auth/google', passport.authenticate('google',
{scope: ['profile','email']}));//means what we require from google 

router.get('/auth/google/callback',
passport.authenticate('google',{failureRedirect:'/'}),
(req,res)=>{
    Info.findOne({userID:req.user.id})
    .then(info => {
      if(info)
      {
          console.log('Proceeding to Dashboard');
          res.redirect('/profile');
      }
      else {
              console.log('Update Information required');
              res.redirect('/updateinfo')
              console.log(req.user);
      }
    })

});
router.get('/verify', (req,res)=>{
console.log(req.user)
    if(req.user){

    console.log('authenticated');
    console.log(req.user);
}
else {
    console.log('not auth');
    console.log(req.user)
}
});




router.get('/logout',(req,res) => {
req.logout();
res.redirect('/');
});

module.exports = router;

router.get('/test', (req,res) => {
    console.log(req.user.id);
})



// router.get('/auth/google', passport.authenticate('google',
//     {scope: ['profile','email']})



// );//means what we require from google

// router.get('/auth/google/callback', passport.authenticate('google',{failureRedirect:'/'}), (req, res) => {
//     // 
//     Info.findOne({userId:req.user.id})
//     .then(info => {
//         if(info)
//         {
//             console.log('info present');
//         }
//         else {
//             const newinfo = {
//                 userId:req.user.id
//             }
//             new Info(newinfo)
//             .save()
//             .then(() => {
//                 res.redirect('/')
//             })
//         }
//     })
   

//     });




//     /*        var firstname = req.user.firstName;
//             var email = req.user.email;

//             var data = [{firstname,email}];
//         console.log(data);

//         if(req.user)
//         {
//           res.render('profile/profile_checkoutpage')
//         }
//         else {
//             res.redirect('/');
//         }
//     */


// router.get('/verify', (req,res)=>{
//     if(req.user){
//         console.log('authenticated');
//     }
//     else {
//         console.log('not auth');
        

//     }
// });
// router.get('/logout' ,(req,res) => {
//     req.logout();
//     res.redirect('/');
//     console.log('Logout Sucessful');
// });
// module.exports = router;
