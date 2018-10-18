const express  = require('express')
    ,router = express.Router()
    ,mongoose = require('mongoose')
    ,User = mongoose.model('User')
const Info = mongoose.model('Info');

router.get('/adminhome', (req,res) => {
    res.render('admin/adminhome')
})

router.get('/adminactive', (req,res)=> {
    console.log('return function');
    User.find({})
        .then(result => {
           res.render('admin/adminactive', {
                        result:result

                
                })
        })
});

router.get('/view/:id', (req,res) => {
    
    
    Info.findOne({userID:req.params.id})
    .then(result => {
        console.log(result)
        res.render('admin/view', {
            result:result
        })
    })
});




module.exports = router;

