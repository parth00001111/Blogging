const { allPosts, postId } = require("../data/store");   

//CREATE POST
const createPost = (req, res) => {
    const userDetail = req.userDetail;
    const title = req.body.title;
    const content = req.body.content;
    postId.postId++;                     
    allPosts.push({
        postId: postId.postId,
        userDetail,
        title,
        content,
        comments:[]
    })
    
    res.json({
        postId: postId.postId,
        userDetail,
        title,
        content,
        comments:[]
    })
}

//ADD COMMENT
const addComment = (req, res) => {
    const postIdNum = Number(req.params.postId);
    const post = allPosts.find(p => p.postId === postIdNum);
    if(!post){
        res.status(411).send("Cannot Comment");
        return;
    }
    const comment = req.body.comment;
    const userDetail = req.userDetail
    post.comments.push({
        comment: comment,
        userDetail:userDetail
    })
    
    res.json({
        comment
    })
}

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