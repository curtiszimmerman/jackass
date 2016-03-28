
var jackass = require('./');
var test = require('tape');

test('jackass', function(t) {
	t.equals(jackass(0), 0);
	t.equals(jackass(1), 1);
	
	t.end();
});
