const express  = require('express');
const router = express.Router();

router.get('/internships', (req,res) => {
   res.render('careers/internship');
});

router.get('/jobs', (req,res) => {
    res.render('careers/job');
});
router.get('/jobs/postajob',(req,res)=>{
    res.render('careers/post_a_job')
})



module.exports = router;

