const mongoose = require("mongoose")

const uri = "mongodb+srv://jainvaibhav671:37BX9AULDcKhaJUg@cluster0.lhangap.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const userSchema = new mongoose.Schema({
  email: String,
  password: String
})

const User = mongoose.model('User', userSchema)

module.exports = { User, uri }

