const indexModule = (() => {
  const path = location.pathname;

  switch (path) {
    case "/" || "/index.html":
      document.getElementById("submit-form").addEventListener("submit", (e) => {
        e.preventDefault();
        return mainModule.createPost();
      });
      return mainModule.fetchAllPosts();
    case "/edit.html":
      const pid = location.search.split("?pid=")[1];
      document.getElementById("edit-form").addEventListener("submit", (e) => {
        e.preventDefault();

        return mainModule.updatePost(pid);
      });
      document.getElementById("delete-btn").addEventListener("click", () => {
        return mainModule.deletePost(pid);
      });

      return mainModule.fetchOnePost(pid);
  }
})();
