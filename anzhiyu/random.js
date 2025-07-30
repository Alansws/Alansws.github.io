var posts=["posts/32733.html","posts/1763.html","posts/5117.html","posts/42350.html","posts/1.html","posts/63785.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };