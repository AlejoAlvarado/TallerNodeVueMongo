const mongoose = require('mongoose')

let url = "mongodb+srv://laura:node123@cluster0.ejfmn.mongodb.net/user?retryWrites=true&w=majority"

mongoose.set("useNewUrlParser" ,true)
mongoose.set("useUnifiedTopology",true )
mongoose.connect(url)

let db = mongoose.connection
db.on("error",console.error.bind(console, "Mongo error conection"))
module.exports = db