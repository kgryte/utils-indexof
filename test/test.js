'use strict';

// MODULES //

var tape = require( 'tape' );
var indexOf = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof indexOf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws a type error if not provided an array-like object', function test( t ) {
	var values;
	var i;

	values = [
		// '5', // array-like
		5,
		NaN,
		true,
		null,
		undefined,
		{}, // not array-like, as no length
		function(){} // has length, but is a function
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws type error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			indexOf( value, 3 );
		};
	}
});

tape( 'if provided an array-like object having length `0`, the function always returns `-1`', function test( t ) {
	var idx = indexOf( [], 5 );
	t.equal( idx, -1, 'returns -1' );
	t.end();
});
