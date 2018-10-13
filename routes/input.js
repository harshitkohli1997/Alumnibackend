const express  = require('express')
    ,router = express.Router()
    ,mongoose = require('mongoose')
    ,User = mongoose.model('User')
const Info = mongoose.model('Info');



router.post('/profileupdate', function(req, res) {

   const newInfo = {
      userID : req.user.id,
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
    }
   // console.log(newInfo);
    res.redirect('/profileupdate');
});

router.get('/profileupdate', (req,res)=> {
    console.log('return function');
    User.findOne({googleID: req.user.googleID})
        .then(result => {
            userData = result;
            Info.findOne({})
                .then(result1 => {
                    infoData = result1;

                    const data = {
                        userData,
                        infoData
                    };
                    console.log(userData);
                    console.log('end of data');
                    console.log(data);
                    res.render('profile/abc', {
                        result1:data

                    })
                })
        })
})


module.exports = router;
