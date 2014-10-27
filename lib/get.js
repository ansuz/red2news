var reddit = require('redwrap');
var fs = require("fs");

var readSeen=function(sub){
  try{
    console.log("Searching for a list of posts you've seen before");
    return JSON.parse(fs.readFileSync("./latest."+sub+".seen.json","utf-8"));
  }catch(err){
    console.log(err);
    console.log("File not found! Starting with a blank slate.");
    return {seen:[]};
  }
};

var writeSeen=function(sub,ids){
  fs.writeFileSync("./latest."+sub+".seen.json",JSON.stringify({seen:ids}));
};


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

grab.fetchSub=function(sub,handle){
  // synchronous read
  var seen=readSeen(sub).seen;
  console.log(seen);

  reddit.r(sub,function(err,data,res){
    if(err)console.log(err);
    data.data.children.map(function(x){
      if(!seen.indexOf(x.data.id)){ // if you've seen this post, you don't want to repost
        console.log("We've seen "+x.data.id+" before..."); 
      }else{
        console.log(x.data.id+" is a new one");
        seen.push(x.data.id); // add the unfiltered posts to the 'seen' array
        handle(x); // do whatever it was you were supposed to do with the file...
      }
    });
//    console.log(seen);
    writeSeen(sub,seen); // write the new 'seen list' to file
  });
};

module.exports=grab;
