var posts=["posts/16107.html","posts/1.html","posts/63785.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };