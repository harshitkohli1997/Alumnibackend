const Mongoose = require('mongoose');
const User = Mongoose.model('User');


exports.signin = (req, res) => {};

exports.authCallback = (req, res) => {
    res.redirect('/');
};

exports.register = (req, res) => {
    res.render('register');
};

exports.createaccount = (req, res) => {
    res.render('Login/createaccnt')
};

exports.login = (req, res) => {
    res.render('Login/newlogin');
};

exports.loginpage = (req, res) => {
    res.render('Login/loginpage');
};


exports.session = (req, res) => {
    res.redirect('/');
};


exports.mail = (req,res) => {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'vaibhav.aggarwal2402@gmail.com',
            pass: 'learning@123'
        }
    });

    var mailOptions = {
        from: 'vaibhav.aggarwal2402@gmail.com',
        to: 'vaibhavz2402@gmail.com',
        subject: 'ADGITM Alumni',
        text: 'User Login on ADGITM Alumni Page'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

