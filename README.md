red2news
========

Written for jph, cause he asked nicely (and cause I secretly want everyone to use js for everything).

repost reddit as an nntp messsage.

You'll need to install the necessary js packages:

* node-nntp
* redwrap

That's easy, though.

```bash
npm install
```

Then you can find some examples in lib/example

'shower.js' shows you how you might fetch the first page of a subreddit. Whatever it fetches from the reddit api is logged to the console.

'fetcher.js' grabs from 'r/gifs'. Ultimately, it's meant to repost to a Hyperborian nntp server, and we don't want to spam, so we perform some checks to make sure we aren't reposting whatever we posted before. 

It looks for a file describing what it *has* posted before, and if it doesn't find it, it starts fresh.

It passes a JSON object to the supplied handler, adds that post's id to it's list of seen posts, and writes that list to file when it's done.
