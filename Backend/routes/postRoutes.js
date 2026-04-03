const express = require("express");
const router = express.Router();
const { middleware } = require("../middleware/auth");
const {
    createPost,
    addComment,
    getAllPosts,
    alluser,
    getSinglePost,
    updatePost,
    deletePost,
    deleteUser
} = require("../controllers/postController");

router.post("/create-post", middleware, createPost);
router.post('/posts/:postId/comments', middleware, addComment);
router.get("/allposts", middleware, getAllPosts);
router.get("/allUser", middleware, alluser);
router.get("/post/:postId", middleware, getSinglePost);
router.put('/posts/:postId', middleware, updatePost);
router.put('/posuserostId', middleware, updatePost);
router.delete('/posts/:postId', deletePost);
router.delete('/user/:userId', deleteUser);

module.exports = router;