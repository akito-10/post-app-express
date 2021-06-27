const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const Post = require("./api/models/postModel");
const path = require("path");

mongoose.Promise = global.Promise;
const connectDB = require("./db");
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

const routes = require("./api/routers/postRoute");
routes(app);

app.listen(PORT, () => {
  console.log(`Post app listening on port ${PORT}`);
});
