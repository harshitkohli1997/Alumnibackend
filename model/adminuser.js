const mongoose = require('mongoose');
const crypto =require('crypto');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    username  : {
        type: String,

    },
    password:{
        type:String
    }
});
module.exports = mongoose.model('Admin', AdminSchema);


AdminSchema.pre('save', function(next) {
    if (this.password) {
        this.salt = new Buffer(
            crypto.randomBytes(16).toString('base64'),
            'base64'
        );
        this.password = crypto.pbkdf2Sync(
            password, this.salt, 10000, 64).toString('base64')
    }
    next();
});