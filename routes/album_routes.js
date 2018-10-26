const express  = require('express');
const router = express.Router();

router.get('/albums',(req,res)=>{
    res.render('Gallery/albums')
})
router.get('/CSE',(req,res)=>{
    res.render('Gallery/Branch/CSE')
})

router.get('/IT',(req,res)=>{
    res.render('Gallery/Branch/IT')
})
router.get('/MCA',(req,res)=>{
    res.render('Gallery/Branch/MCA')
})
router.get('/CIVIL',(req,res)=>{
    res.render('Gallery/Branch/CIVIL')
})
router.get('/EEE',(req,res)=>{
    res.render('Gallery/Branch/EEE')
})
router.get('/MAE',(req,res)=>{
    res.render('Gallery/Branch/MAE')
})

module.exports = router;