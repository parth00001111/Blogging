const express = require("express");
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();
app.use(express.json());

app.use(authRoutes);
app.use(postRoutes);

app.listen(3000);