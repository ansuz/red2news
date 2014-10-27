var reddit = require('redwrap');

reddit.r('gifs', function(err, data, res){
  data.data.children.map(function(x){
    console.log();
//    console.log(JSON.stringify(x.data));
    console.log("Title: %s",x.data.title);
    console.log("Domain: %s",x.data.domain);
    console.log("Subreddit: %s",x.data.subreddit);
    console.log("Author: %s",x.data.author);
    console.log("Thumbnail Url: %s",x.data.thumbnail);
    console.log("Permalink: %s",x.data.permalink);
    console.log("URL: %s",x.data.url);
    console.log("Created UTF: %s", x.data.created_utc);
    console.log("Number of Comments: %s",x.data.num_comments);
  });
});
