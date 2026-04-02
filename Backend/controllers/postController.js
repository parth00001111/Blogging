const { postModel } = require("../models/models");
//CREATE POST
const createPost = async(req, res) => {
    const userId = req.userDetail.id;
    const title = req.body.title;
    const content = req.body.content             
   const newPost = await postModel.create({
       
            title,
            content,
            userId,
            comment:[]
        });
    res.json({
       newPost
    })
}

//ADD COMMENT
const addComment = async (req, res) => {
    const postId = req.params.postId;
    const commentText = req.body.comment;
    const userId = req.userDetail.id;

    const post = await postModel.findById(postId);

    if (!post) {
        return res.send("Post not found");
    }

    post.comment.push({
        comment: commentText,
        userId: userId
    });

    await post.save();

    res.send("Comment added");
};
//GET ALL POSTS
const getAllPosts = (req,res) => {
    res.json(allPosts)
}

//GET SINGLE POST
const getSinglePost = (req, res) => {
    const postIdNum = Number(req.params.postId);
    
    const post = allPosts.find(p => p.postId === postIdNum);
    if(!post){
        res.status(411).send("no post")
    }else{
        res.json({
            post
        })
    }
}

//UPDATE POST
const updatePost = (req, res) => {
    const postIdNum = Number(req.params.postId);
    const post= allPosts.find(i => i.postId === postIdNum);
    if(!post){
        res.status(401).send("Not Valid");
        return;
    }
    const title = req.body.title;
    const content = req.body.content;
    post.title = title;
    post.content = content;

    res.send("Post is Updated");
}

//DELETE POST
const deletePost = (req, res) => {
    const postIdNum = Number(req.params.postId);
    allPosts = allPosts.filter(i => i.postId !== postIdNum);

    res.send("Post is Deleted");
};

module.exports = {
    createPost,
    addComment,
    getAllPosts,
    getSinglePost,
    updatePost,
    deletePost
};