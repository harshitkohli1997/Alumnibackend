const express  = require('express');
const router = express.Router();

//Login Files Rendering Through these Routes
router.get('/loginuser', function(req, res, next) {
    res.render('Login/loginpage');
});

// router.post('/adddetails', function(req, res) {
//     res.render('Login/updateinfo')
// });
router.get('/profileupdate',(req,res)=>{
    res.render('profile/profile_checkoutpage')
})
router.get('/login', function(req, res, next) {
    res.render('Login/newlogin');
});


router.get('/createaccount', (req,res) => {
    res.render('Login/createaccnt')
})


//profile page
 router.get('/profile',(req,res)=>{
     res.render('profile/profile_page');
 })

//Search Alumni by Resource
router.get('/searchbyresource',(req,res)=>{
    res.render('search_by_resources/search_by_resources')
})
router.get('/searchbyresource/city',(req,res)=>{
    res.render('search_by_resources/search_by_R_city');
})
module.exports = router;
