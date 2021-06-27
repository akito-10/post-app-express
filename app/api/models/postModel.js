const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: "投稿の名前を入れてください",
  },
  createAt: {
    default: Date.now,
    type: Date,
  },
  updateAt: {
    default: Date.now,
    type: Date,
  },
});

module.exports = mongoose.model("posts", PostSchema);
