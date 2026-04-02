    const mongoose = require("mongoose");
    mongoose.connect("mongodb+srv://kanhamahajan73:kanha123@cluster0.lmz1a4r.mongodb.net/Blog")

const userSchema = new mongoose.Schema({
    username:String,
    password:String

})
const postSchema = new mongoose.Schema({
    title:String,
    content:String,
    comment:[]

})

const userModel = mongoose.model('users', userSchema);
const postModel = mongoose.model('posts', postSchema);

module.exports = {
    userModel,
    postModel
}