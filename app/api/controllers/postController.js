const mongoose = require("mongoose").set("debug", true);
const Post = mongoose.model("posts");

exports.fetch_all_posts = async (req, res) => {
  await Post.find({}, (err, post) => {
    if (err) res.send(err);
    res.json(post);
  });
};

exports.create_post = (req, res) => {
  const new_post = new Post(req.body);
  new_post.save((err, post) => {
    if (err) res.send(err);
    res.json(post);
  });
};

exports.fetch_one_post = async (req, res) => {
  await Post.findById(req.params.postId, (err, post) => {
    if (err) res.send(err);
    res.json(post);
  });
};

exports.update_post = (req, res) => {
  Post.findByIdAndUpdate(
    { _id: req.params.postId },
    req.body,
    { new: true },
    (err, post) => {
      if (err) res.send(err);
      res.json(post);
    }
  );
};

exports.delete_post = (req, res) => {
  Post.remove(
    {
      _id: req.params.postId,
    },
    (err, post) => {
      if (err) res.send(err);
      res.json({ message: "Post successfully deleted" });
    }
  );
};
