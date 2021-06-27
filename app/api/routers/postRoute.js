module.exports = (app) => {
  const posts = require("../controllers/postController");

  app.route("/posts").get(posts.fetch_all_posts).post(posts.create_post);

  app
    .route("/posts/:postId")
    .get(posts.fetch_one_post)
    .put(posts.update_post)
    .delete(posts.delete_post);
};
