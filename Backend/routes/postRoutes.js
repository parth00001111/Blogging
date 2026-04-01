const express = require("express");
const router = express.Router();
const { middleware } = require("../middleware/auth");
const {
    createPost,
    addComment,
    getAllPosts,
    getSinglePost,
    updatePost,
    deletePost
} = require("../controllers/postController");

router.post("/create-post", middleware, createPost);
router.post('/posts/:postId/comments', middleware, addComment);
router.get("/allposts", middleware, getAllPosts);
router.get("/post/:postId", middleware, getSinglePost);
router.put('/posts/:postId', middleware, updatePost);
router.delete('/posts/:postId', deletePost);

module.exports = router;