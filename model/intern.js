var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InternSchema = new Schema({
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
    startDate: {
        type: String,
    },
    duration: {
        type: Number,
    },
    workType: {
        type: Number,
    },
    description: {
        type: String,
    },

});


module.exports = mongoose.model('Intern', InternSchema);
