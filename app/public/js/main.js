const mainModule = (() => {
  const BASE_URL = "http://localhost:3000/posts";
  const headers = new Headers();
  headers.set("Content-Type", "application/json");

  const goHome = () => {
    const a = document.createElement("a");
    a.setAttribute("href", "/");
    a.click();
  };

  return {
    fetchAllPosts: async () => {
      const res = await fetch(BASE_URL);
      const posts = await res.json();

      const postArea = document.getElementById("post-area");
      console.log(postArea);
      posts.forEach((post) => {
        const postEl = `<div class="post">
                          <div class="post-header">
                            <p>${post.title}</p>
                            <p class="post-date">投稿日: ${post.createAt}</p>
                          </div>
                          <div class="post-actions">
                            <button>
                              <a href="/edit.html?pid=${post._id}">編集</a>
                            </button>
                          </div>
                        </div>`;

        postArea.insertAdjacentHTML("beforeend", postEl);
      });
    },
    createPost: async () => {
      const title = document.getElementById("post-title").value;

      const body = {
        title: title,
      };

      const res = await fetch(BASE_URL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });

      goHome();
    },
    fetchOnePost: async (pid) => {
      const res = await fetch(`${BASE_URL}/${pid}`);
      const post = await res.json();

      document.getElementById("edit-title").value = post.title;
    },
    updatePost: async (pid) => {
      const title = document.getElementById("edit-title").value;

      const body = {
        title: title,
      };

      const res = await fetch(`${BASE_URL}/${pid}`, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(body),
      });
      const post = await res.json();

      document.getElementById("edit-title").value = post.title;
    },
    deletePost: async (pid) => {
      const ret = confirm("この投稿を削除しますか？");

      if (!ret) {
        return false;
      } else {
        const res = await fetch(`${BASE_URL}/${pid}`, {
          method: "DELETE",
          headers: headers,
        });

        goHome();
      }
    },
  };
})();
