const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
//const{ ensureAuthenticated, ensureGuest }= require('../configuration/ensureauth')
const config = require('../configuration/ensureauth');


const Event = mongoose.model('Event')

router.get('/event', (req,res) => {
    Event.find({})
    .then(event => {
        res.render('event/allevent', {
            event:event
        });
    })
   
});

router.get('/postevent', (req,res) => {
    res.render('event/postevent');
});

router.post('/postevent',config.ensureAuthenticated ,(req,res) => {

    const event = {
        userId:req.user.id,
        eventnm:req.body.eventnm,
        venuenm:req.body.venue,
        date:req.body.date,
        eventdesc:req.body.eventdesc,
        useremail:req.user.email
    }
    new Event(event)
    .save()
    .then(() => {
        console.log('saved')
        res.redirect('/event')
    })
})

module.exports = router;