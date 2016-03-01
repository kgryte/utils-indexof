'use strict';

// MODULES //

var isArrayLike = require( 'validate.io-array-like' );


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
function indexOf( arr, val, i ) {
	if ( !isArrayLike( arr ) ) {
		throw new TypeError( 'invalid input argument. First argument must be an array-like object. Value: `' + arr + '`.' );
	}
} // end FUNCTION indexOf()


// EXPORTS //

module.exports = indexOf;
