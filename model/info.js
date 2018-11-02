var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InfoSchema = new Schema({
    userID: {
        type: String,

    },
    fbLink: {
        type: String
    },
    gLink: {
        type: String
    },
    linkedinLink: {
        type: String
    },
    githubLink: {
        type: String
    },
    twitterLink:{
        type:String
    },
    ResumeLink:{
        type:String
    },
    mobilePhone: {
        type: Number,
    },
    city: {
        type: String
    },
    graduationYear: {
        type: Number
    },
    entryYear: {
        type: Number
    },
    course: {
        type: String
    },
    branch: {
        type: String
    },
    visitingcard:{
        type:String
    },
    enrollementNumber: {
        type: Number,
    },
    otherEducation:[{
        yearEntry :{
            type: String
        },
        yearGraduation:{
            type: String
        },
        degree: {
            type: String
        },
        field:{
            type: String
        },
        specialisation:{
            type: String
        }
    }],
    experience:[{
        employer:{
            type: String
        },
        job:{
            type: String
        },
        from:{
            type: String
        },
        to:{
            type: String
        }
    }]
});


module.exports = mongoose.model('Info', InfoSchema);