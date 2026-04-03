const { postModel, userModel } = require("../models/models");
//CREATE POST
const createPost = async(req, res) => {
    const userId = req.userDetail.userId;
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
    const userId = req.userDetail.userId;

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
const getAllPosts = async(req,res) => {
    const fetchAll = await postModel.find({})// khali me sara khud hi aa jaiga 
    if(!fetchAll){
        res.status(404).json({
            message : "Not Found"
        })
        return;
    }
    res.json({
        fetchAll
    })
}
const alluser = async(req, res) => {
    const fetchUser = await userModel.find({})
    if(!fetchUser){
        req.status(404).json({
            message: "Not Found"
        })
        return;
    }
    res.json({
        fetchUser
    })
}

//GET SINGLE POST
const getSinglePost = async(req, res) => {
    const postId = req.params.postId;
    const fetchPost = await postModel.findById(postId)
    if(!fetchPost) {
        res.status(404).json({
            message: "Post Not Found"
        })
        return;
    }
    res.json({
        fetchPost
    })

}

//UPDATE POST
const updatePost = async(req, res) => {
    const postId = req.params.postId
    const updatePost = await postModel.findByIdAndUpdate(postId,{
        title: req.body.title,
        contenc:req.body.title
    })
    if (!updatePost) {
        res.status(400).json({
            message: "Bad Request"
        })
        return;
    }
    res.json({
        message: "Post Update Successfully"
    })

}

//DELETE POST
const deletePost = async(req, res) => {
    const postId = req.params.postId
    await postModel.findByIdAndDelete(postId)
    res.send("Post is Deleted");
};

//DELETE USER 
const deleteUser = async (req, res) => {
    const userId = req.params.userId;
    await userModel.findOneAndDelete(userId);
    res.json({
        message: "User is Deleted Permanently"
    }) 
}

module.exports = {
    createPost,
    addComment,
    getAllPosts,
    alluser,
    getSinglePost,
    updatePost,
    deletePost,
    deleteUser
};