const express  = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require( '../model/user');
const Job = mongoose.model('Job');
const Intern = mongoose.model('Intern');
//const{ ensureAuthenticated, ensureGuest }= require('../configuration/ensureauth')
const config = require('../configuration/ensureauth');

router.get('/internships', (req,res) => {
    Intern.find({})
        .then(intern =>{
            console.log('enter....');
            res.render('careers/internship',{
                intern : intern
            })
        })
});
router.get('/careers',(req,res)=>{
    res.render('careers/career')
})
router.get('/jobs', (req,res) => {
    Job.find({})
        .then(job =>{
            console.log('enter....');
            res.render('careers/job',{
                job : job
            })
        })
});

router.get('/postjobs',config.ensureAuthenticated, (req,res) => {
    res.render('careers/post_a_job')
})
router.get('/jobselection',config.ensureAuthenticated,(req,res)=>{
    res.render('careers/job_select')
})

router.get('/postinternships',config.ensureAuthenticated, (req,res) => {
    res.render('careers/post_internship')
})

router.post('/postjob', function (req,res) {
    const newJob= {
        userID : req.user.id,
        jobTitle: req.body.jobTitle,
        locaton: req.body.locaton,
        company: req.body.company,
        domain: req.body.domain,
        salary: req.body.salary,
        experience: req.body.experience,
        description: req.body.description,
    }

    console.log(newJob);


    var errors = 0;

    if(errors){
        res.render('careers/post_a_job', {
            Job : newJob
        });
    } else {
        //console.log('in else');
        new Job(newJob)
            .save()
            .then(() => {
                console.log('saved');
            })
    }

    res.redirect('/postjob');

})

router.get('/postjob', (req,res) =>{
    Job.find({})
        .then(job =>{
            console.log('enter....')
            res.render('careers/job',{
                job : job
            })
        })

})



router.post('/postinternship', function (req,res) {
    const newIntern = {

        userID : req.user.id,
        jobTitle: req.body.jobTitle,
        locaton: req.body.locaton,
        company: req.body.company,
        startDate: req.body.startDate,
        duration: req.body.duration,
        workType: req.body.workType,
        description: req.body.description,
    }

    console.log(newIntern);

    var errors = 0;

    if(errors){
        res.render('careers/post_internship', {
            Intern : newIntern
        });
    } else {
        console.log('in else');
        new Intern(newIntern)
            .save()
            .then(() => {
                console.log('saved new intern');
            })
    }

    res.redirect('/postinternship');


})

router.get('/postinternship', (req,res) =>{
    Intern.find({})
        .then(intern =>{
            console.log('enter....')
            res.render('careers/internship',{
                intern : intern
            })
        })

})


module.exports = router;

