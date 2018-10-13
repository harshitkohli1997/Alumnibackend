var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InfoSchema = new Schema({
    userID: {
        type: String,

     },
     email:{
         type:String
     },
    gender:{
        type:String,
    },
    mobilePhone:{
        type:Number,
    },
    city:{
        type:String
    },
    graduationYear:{
        type: Number
    },
    entryYear:{
      type: Number
    },
    course:{
        type:String
    },
    branch:{
        type:String
    },
    enrollementNumber:{
        type:Number,
    },

});
// mongoose.model('Info',InfoSchema);
module.exports = mongoose.model('Info', InfoSchema);

