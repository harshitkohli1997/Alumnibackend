const express  = require('express');
const router = express.Router();
//const{ ensureAuthenticated, ensureGuest }= require('../configuration/ensureauth')
const config = require('../configuration/ensureauth');

//Login Files Rendering Through these Routes
router.get('/loginuser', function(req, res, next) {
    res.render('Login/loginpage');
});



router.get('/login', function(req, res, next) {
    res.render('Login/newlogin');
});

router.get('/test', (req,res)=>{
    res.render('profile/abc');
})
//profile page

router.post('/profile',(req,res)=>{
    res.render('profile/profile_page',{userobj:req.body});
})

router.get('/updateinfo', (req,res) => {
    res.render('profile/profile_checkoutpage')
})

//Search Alumni by Resource
router.get('/searchbyresource',(req,res)=>{
    res.render('search_Alumni/search_by_resources')
})
router.get('/searchbyresource/city',(req,res)=>{
    res.render('search_Alumni/search_by_R_city');
})
router.get('/searchanalumni',(req,res)=>{
    res.render('search_Alumni/search_an_Alumni')
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

router.get('/termsofuse',(req,res)=>{
    res.render('More_Pages/termsofuse')
})
router.get('/privacypolicy',(req,res)=>{
    res.render('More_Pages/privacypolicy')
})

router.get('/construction',(req,res)=>{
    res.render('More_Pages/construction')
});

router.get('/jobselect', config.ensureAuthenticated,(req,res)=>{
    res.render('More_Pages/job_select')
})
module.exports = router;
