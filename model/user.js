var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    googleID:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    image:{
        type:String
    },
    status:{
        type:String
    }
});

//create collection and add scehma
mongoose.model('User',UserSchema)


// module.exports = mongoose.model('User', UserSchema);
//
// module.exports.getUserByEmail = function(useremail, callback){
//     var query = {email: useremail};
//     User.findOne(query, callback);
// }
//
// module.exports.comparePassword = function(candidatePassword, hash, callback){
//     bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
//         callback(null, isMatch);
//     });
// }
//
// module.exports.createUser = function(newUser, callback){
//     bcrypt.genSalt(10, function(err, salt) {
//         bcrypt.hash(newUser.password, salt, function(err, hash) {
//             newUser.password = hash;
//             newUser.save(callback);
//         });
//     });
// }