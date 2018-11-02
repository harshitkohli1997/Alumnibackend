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
            user: 'adgitmalumni@gmail.com',
            password: 'qwerty@123'
        }
    });

    var mailOptions = {
        from: 'adgitmalumni@gmail.com',
        to: req.user.email,
        subject: 'Welcome To ADGITM Alumni',
        text: `Welcome ${req.user.name},
                Thanks for signing up to keep in touch with Dr. Akhilesh Das Gupta Institute of Technology and Management College. From now on you will get regular updates of all the upcoming Alumni Events.
                Your Unique Id is ${req.user.id}. 
                Enjoy your Day!!`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

