var posts=["2022/11/09/第一篇文章/","2022/11/09/第三篇文章/","2022/11/09/第七篇文章/","2022/11/09/第二篇文章/","2022/11/09/第九篇文章/","2022/11/09/第五篇文章/","2022/11/09/第八篇文章/","2022/11/09/第六篇文章/","2022/11/11/第十一篇文章/","2022/11/10/第十篇文章/","2022/11/09/第四篇文章/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};