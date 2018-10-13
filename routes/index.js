var express           =     require('express')
    ,career = require('./career')
    , input = require('./input')
    ,router = express.Router()
    ,users = require("../controllers/users")
    ,passport =require('passport')
    ,auth = require('./auth')
    ,pages=require('./pages')
    ,event = require('./event');

router.use('/',career);
router.use('/',input);
router.use('/', auth);
router.use('/',event);


router.get('/login', users.login);
router.get('/register', users.register);

router.get('/createaccount', users.createaccount);

router.get('/loginuser', users.loginpage);



router.use('/',pages)
module.exports = router;
