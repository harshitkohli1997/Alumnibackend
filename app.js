var express           =     require('express')
  , passport          =     require('passport')
  , util              =     require('util')
  , session           =     require('express-session')
  , cookieParser      =     require('cookie-parser')
  , bodyParser        =     require('body-parser')
  , config            =     require('./configuration/config')
  , app               =     express()
  ,nodemailer = require('nodemailer')
  ,LocalStrategy = require('passport-local').Strategy
  ,User = require('./model/user'),
  Info = require('./model/info')
  ,Job = require('./model/job')
  ,expressValidator = require('express-validator')
  ,flash = require('connect-flash')
  ,bcrypt = require('bcryptjs')
  ,mongo = require('mongodb')
  ,mongoose = require('mongoose')
  require('./model/event')
  ,routes = require('./routes/index');
  

const auth = require('./routes/auth')
mongoose.Promise = global.Promise;
const exphbs = require('express-handlebars');

// Passport Config
require('./configuration/passport')(passport);

//View
app.use(express.static(__dirname + '/Homepage-view'));
app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://vaibhav:learning123@ds119523.mlab.com:19523/alumni-website')
    .then(() => {
        console.log('Database Connection Established....');
    })
    .catch((err) => {
        console.log(err);
    })

  app.engine('handlebars', exphbs({
    defaultLayout: 'main'
  }));
  app.set('view engine', 'handlebars');

 //Passport
 app.use(cookieParser());
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(session({ secret: 'keyboard cat', key: 'sid'}));


 app.use(passport.initialize());
 app.use(passport.session());











app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
            , root    = namespace.shift()
            , formParam = root;

        while(namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param : formParam,
            msg   : msg,
            value : value
        };
    }
}));

app.use((req, res, next) => {
    res.locals.user = req.user || null;
    next();
});

app.use((req, res, next) => {
    res.locals.exist = req.exist || null;
    next();
});


app.use(flash());

app.use('/',routes)

app.get('/', (req,res) => {
     res.render('homepage/home');
});

const port = 2222;

app.listen(port,()=>{
    console.log(`Server has started: localhost: ${port}`);
});

exports = module.exports = app;
