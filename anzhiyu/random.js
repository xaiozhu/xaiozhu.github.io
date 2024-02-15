var posts=["2023/12/25/00-关于谈一场恋爱/","2024/01/20/《爱，喜欢，与被爱》超万字00后文学/","2023/12/24/hello-world - 副本/","2023/12/27/阮报毒/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };