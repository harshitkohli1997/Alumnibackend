const express  = require('express')
    ,router = express.Router()
    ,mongoose = require('mongoose')
    ,User = require('../model/user')
const Info = mongoose.model('Info');


router.post('/profileupdate', function(req, res) {

   const newInfo = {
    //  userID : req.user.id,
    //  email : req.user.email,
     mobilePhone : req.body.mobilePhone,
     city : req.body.city,
     graduationYear : req.body.graduationYear,
     entryYear : req.body.entryYear,
     course : req.body.course,
     branch : req.body.branch,
     enrollementNumber : req.body.enrollementNumber,
}

console.log(newInfo)
    // Form Field Validation
    req.checkBody('mobilePhone', 'Phone Number is required').notEmpty();
  //  req.checkBody('city', 'City is required').notEmpty();
    req.checkBody('graduationYear', 'Graduation Year is required').notEmpty();
    req.checkBody('enrollementNumber', 'Enrollement Number is required').notEmpty();
    req.checkBody('course', 'Course field is required').notEmpty();
    req.checkBody('branch', 'Branch is required').notEmpty();



    var errors = req.validationErrors();

    if(errors){
        res.render('Login/updateinfo', {
            info : newInfo
        });
    } else {

        new Info(newInfo)
        .save()
        .then(info => done(null,info))
    }
    console.log(newInfo);
    res.render('profile/profile_checkoutpage',newInfo)
});

router.post('/adddetails', function(req, res) {
res.render('Login/updateinfo')
})


module.exports = router;
