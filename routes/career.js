const express  = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require( '../model/user');
const Job = mongoose.model('Job');

router.get('/internships', (req,res) => {
    res.render('careers/internship');
});

router.get('/jobs', (req,res) => {
    res.render('careers/job');
});

router.get('/postjobs', (req,res) => {
    res.render('careers/post_a_job')
})
router.get('/jobselection',(req,res)=>{
    res.render('careers/job_select')
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

module.exports = router;

