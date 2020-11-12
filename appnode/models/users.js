const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let userSchema = Schema({
    name: {type: String, required: true},
    username: {type: String, required:true},
    id: {type: Number, requiere:true},
    password: {type:String, required:true},
    photo: {type: String},
    state: {tybe: Boolean},
})

module.exports = mongoose.model('Users', userSchema);