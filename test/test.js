'use strict';

// MODULES //

var tape = require( 'tape' );
var indexOf = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof indexOf, 'function', 'main export is a function' );
	t.end();
});
