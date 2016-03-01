'use strict';

// MODULES //

var isArrayLike = require( 'validate.io-array-like' );
var isInteger = require( 'validate.io-integer-primitive' );


// INDEXOF //

/**
* FUNCTION: indexOf( arr, searchElement[, fromIndex] )
*	Returns the first index at which a given element can be found.
*
* @param {Array|String|Object} arr - array-like object
* @param {*} searchElement - element to find
* @param {Number} [fromIndex] - starting index (if negative, the start index is determined relative to last element)
* @returns {Number} first index or -1
*/
function indexOf( arr, searchElement, fromIndex ) {
	var i;
	if ( !isArrayLike( arr ) ) {
		throw new TypeError( 'invalid input argument. First argument must be an array-like object. Value: `' + arr + '`.' );
	}
	if ( arr.length === 0 ) {
		return -1;
	}
	if ( arguments.length === 3 ) {
		if ( !isInteger( fromIndex ) ) {
			throw new TypeError( 'invalid input argument. `fromIndex` must be an integer. Value: `' + fromIndex + '`.' );
		}
	} else {
		i = 0;
	}
} // end FUNCTION indexOf()


// EXPORTS //

module.exports = indexOf;
