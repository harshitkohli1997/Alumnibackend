const express  = require('express');
const router = express.Router();
//const{ ensureAuthenticated, ensureGuest }= require('../configuration/ensureauth')
const config = require('../configuration/ensureauth')
    ,mongoose = require('mongoose')
    ,User = mongoose.model('User');
const Info = mongoose.model('Info');

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
    res.redirect('/profile');
})

router.get('/profile',(req,res)=>{
    User.findOne({googleID: req.user.googleID})
        .then(result => {
            Info.findOne({userID:req.user.id})
                .then(result1 => {
                    infoData = result1;
                    console.log(infoData);
                    console.log('Sending data...');
                    res.render('profile/profile_page', {
                        info:infoData


                    })
                })
        })
});

router.get('/updateinfo', (req,res) => {
    res.render('profile/profile_checkoutpage')
});

router.get('/editprofile/:id', (req,res) => {
    Info.findOne({_id:req.params.id})
        .then(info => {
            res.render('profile/editprofile',{
                info:info
            });
        })

});

router.get('/path/:id', (req,res) => {
    Info.findOne({_id:req.params.id})
        .then(info => {
            console.log(info);
        })
})

router.post('/editprofile/:id', (req,res) => {

 
    console.log(req.files)
    if (Object.keys(req.files).length == 0) {
        console.log('not upload')
        
    }

else {
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
let sampleFile = req.files.sampleFile;
console.log(req.files);
console.log(sampleFile.name)
var path = 'uploads/'+Date.now()+`${sampleFile.name}`;
var upload = 'public/'+path;

// Use the mv() method to place the file somewhere on your server
sampleFile.mv(upload, function(err) {
    if (err)
    {
        console.log(err);
    }


    console.log('File uploaded!');
});
}


    Info.findOne({_id:req.params.id})
        .then(info  => {
            if(info.visitingcard)
            {
                var path = info.visitingcard
            }


            info.userID = req.user.id,
                info.mobilePhone = req.body.mobilePhone,
                info.city = req.body.city,
                info.graduationYear = req.body.graduationYear,
                info.entryYear = req.body.entryYear,
                info.course = req.body.course,
                info.branch = req.body.branch,
                info.enrollementNumber = req.body.enrollementNumber,
                info.fbLink = req.body.fbLink,
                info.gLink = req.body.gLink,
                info.linkedinLink = req.body.linkedinLink,
                info.githubLink = req.body.githubLink,
                info.twitterLink = req.body.twitterLink,
                info.ResumeLink = req.body.ResumeLink,


                info.visitingcard = path,

                info.otherEducation = [{
                    yearEntry : req.body.yearEntry,
                    yearGraduation: req.body.yearGraduation,
                    degree: req.body.degree,
                    field: req.body.field,
                    specialisation: req.body.specialisation,
                }],
                info.experience = [{
                    employer: req.body.employer,
                    job: req.body.job,
                    from: req.body.from,
                    to: req.body.to,
                }]
            info.save()
                .then(info => {
                    res.redirect('/profile');
                })
                .catch(err => {
                    console.log(err);
                })
        })
        .catch(err => {
            console.log(err);
        })
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