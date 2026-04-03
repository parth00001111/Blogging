const mongoose = require("mongoose");



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