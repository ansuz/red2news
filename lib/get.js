var reddit = require('redwrap');

var grab={};

grab.showSub=function(sub){
  reddit.r(sub, function(err, data, res){
    if(err)console.log(err);
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
};

grab.fetch=function(sub,handle){
  reddit.r(sub,function(err,data,res){
    if(err)console.log(err);
    data.data.children.map(function(x){
      // do something with all this data...
      // we probably want to check if we've already uploaded this one?
      // so probably read a JSON file and parse it
      // then filter out those posts which we've already seen
      // add the unfiltered posts to the 'seen' array
      // and write that to a new file

      // handle(x);  // the callback you'll want to use...

    });
  });
};

module.exports=grab;
