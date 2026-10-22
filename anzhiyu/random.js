var posts=["blog/spring-mock-login-token.html","blog/ReAct_VS_PlanExecute.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };