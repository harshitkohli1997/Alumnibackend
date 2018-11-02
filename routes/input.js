const express  = require('express')
    ,router = express.Router()
    ,mongoose = require('mongoose')
    ,nodemailer = require('nodemailer')
    ,User = mongoose.model('User');
const Info = mongoose.model('Info');
const fileUpload = require('express-fileupload');
//const{ ensureAuthenticated, ensureGuest }= require('../configuration/ensureauth')
const config = require('../configuration/ensureauth');

router.use(fileUpload());

router.get('/upload', (req,res) => {
    res.render('profile/abc')
})

router.post('/upload', (req,res) => {
    console.log(req.files)
    if (!req.files) {
        console.log('no files')
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleFile;
    console.log(req.files);
    console.log(sampleFile.name)

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(upload, function(err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!');
    });
})

router.post('/profileupdate', function(req, res) {


    console.log(req.files)
    if (Object.keys(req.files).length === 0) {
        var path = '';
        console.log('not upload')

    }

    else {
        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        let sampleFile = req.files.sampleFile;
        console.log(req.files);
        console.log(sampleFile.name)
        const path = 'uploads/'+Date.now()+`${sampleFile.name}`;
        const upload = 'public/'+path;

        // Use the mv() method to place the file somewhere on your server
        sampleFile.mv(upload, function(err) {
            if (err)
            {
                console.log(err);
            }


            console.log('File uploaded!');
        });
    }



    const newInfo = {
        userID: req.user.id,
        mobilePhone: req.body.mobilePhone,
        city: req.body.city,
        graduationYear: req.body.graduationYear,
        entryYear: req.body.entryYear,
        course: req.body.course,
        branch: req.body.branch,
        enrollementNumber: req.body.enrollementNumber,
        fbLink: req.body.fbLink,
        gLink: req.body.gLink,
        linkedinLink: req.body.linkedinLink,
        githubLink: req.body.githubLink,
        twitterLink: req.body.twitterLink,
        ResumeLink: req.body.ResumeLink,
        visitingcard:path,

        otherEducation: [{
            yearEntry: req.body.yearEntry,
            yearGraduation: req.body.yearGraduation,
            degree: req.body.degree,
            field: req.body.field,
            specialisation: req.body.specialisation,
        }],
        experience: [{
            employer: req.body.employer,
            job: req.body.job,
            from: req.body.from,
            to: req.body.to,
        }]
    }


    new Info(newInfo)
        .save()
        .then(info => {
            res.redirect('/profileupdate');
            done(null,info);
        });


});

router.get('/profileupdate',(req,res)=> {
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
                    console.log('Sending data...');
                    res.redirect('/profile')
                })
        })
})

/*
router.post('/contactus', (req,res) =>{
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Message = req.body.Message;
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            type: "login",
            user: 'adgitmalumni@gmail.com',
            password: 'qwerty@123'
        }
    });
    var mailOptions = {
        from: Email,
        to: 'adgitmalumni@gmai.com',
        subject: 'ADGITM Alumni',
        sub: 'Query on adgitmalumni.in',
        text: Message
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
})
*/


module.exports = router;