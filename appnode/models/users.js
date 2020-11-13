const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let userSchema = Schema({
    name: {
        fistname: String, 
        lastname: String,        
    },
    userid: {
        idtype: String,
        idvalue: Number,       
    },
    username: {type: String, required:true, max:8},   
    password: {type:String, required:true},
    photo: {type: String},
    state: {type: Boolean, require:true},
})

module.exports = mongoose.model('Users', userSchema);