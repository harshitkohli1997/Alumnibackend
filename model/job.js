var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
     userID: {
         type: String,
     },
     jobTitle: {
        type: String,
    },
    company: {
        type: String,
    },
    location: {
        type: String,
    },
    domain: {
        type: String,
    },
    salary: {
        type: Number,
    },
    experience: {
        type: Number,
    },
    description: {
        type: String,
    },

});


module.exports = mongoose.model('Job', JobSchema);