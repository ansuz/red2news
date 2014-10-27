var NNTP = require('nntp'),
    inspect = require('util').inspect;

var c = new NNTP();

c.on('ready', function() {
  var msg = {
    from: { name: 'Node User', email: 'user@example.com' },
    groups: 'alt.test',
    subject: 'Just testing, do not mind me',
    body: 'node.js rules!'
  };
  c.post(msg, function(err) {
    if (err) throw err;
  });
});

c.on('error', function(err) {
  console.log('Error: ' + err);
});

c.on('close', function(had_err) {
  console.log('Connection closed');
});

c.connect({
  host: 'example.org',
  user: 'foo',
  password: 'bar'
});
