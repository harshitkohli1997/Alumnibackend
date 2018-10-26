var express           =     require('express')
    ,career = require('./career')
    , input = require('./input')
    ,router = express.Router()
    ,users = require("../controllers/users")
    ,passport =require('passport')
    ,auth = require('./auth')
    ,pages=require('./pages')
     ,event = require('./event')
    ,LocalStrategy = require('passport-local').Strategy
    ,admin = require('./admin')
 ,albums = require('./album_routes');


router.use('/',career);
router.use('/',input);
router.use('/', auth);
router.use('/',pages);
 router.use('/',event);
router.use('/',admin);
router.use('/',albums);

module.exports = router;