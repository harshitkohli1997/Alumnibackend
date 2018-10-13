const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    userID  : {
        type: String,

     },
     eventnm:{
         type:String
     },
     eventdesc:{
       type:String,
     },
    date:{
        type:String,
    },
    venuenm:{
        type:String,
    },
    useremail:{
        type:String
    },
 

});
module.exports = mongoose.model('Event', EventSchema);