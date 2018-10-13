const express  = require('express');
const router = express.Router();

//Login Files Rendering Through these Routes
router.get('/loginuser', function(req, res, next) {
    res.render('Login/loginpage');
});



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
router.get('/profilecheckout',(req,res)=>{
    res.render('profile/profile_checkoutpage')
})


//Search Alumni by Resource
router.get('/searchbyresource',(req,res)=>{
    res.render('search_by_resources/search_by_resources')
})
router.get('/searchbyresource/city',(req,res)=>{
    res.render('search_by_resources/search_by_R_city');
})

//Gallery
router.get('/gallery',(req,res)=>{
    res.render('Gallery/image_gallery')
})


//More Pages -
router.get('/faqs',(req,res)=>{
    res.render('More_Pages/FAQs')
});
router.get('/volunteer',(req,res)=>{
    res.render('More_Pages/volunteer_opportunity')
});
router.get('/about',(req,res)=>{
    res.render('More_Pages/about_ADGITM')
});
module.exports = router;
