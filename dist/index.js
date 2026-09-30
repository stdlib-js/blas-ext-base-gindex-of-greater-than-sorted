/** @license Apache-2.0 */

'use strict';

/**
* Return the index of the first element in a sorted strided array which is greater than a specified search element.
*
* @module @stdlib/blas-ext-base-gindex-of-greater-than-sorted
*
* @example
* var gindexOfGreaterThanSorted = require( '@stdlib/blas-ext-base-gindex-of-greater-than-sorted' );
*
* var x = [ 1.0, 2.0, 2.0, 3.0 ];
*
* var idx = gindexOfGreaterThanSorted( x.length, 2.0, x, 1 );
* // returns 3
*
* @example
* var gindexOfGreaterThanSorted = require( '@stdlib/blas-ext-base-gindex-of-greater-than-sorted' );
*
* var x = [ 1.0, 2.0, 2.0, 3.0 ];
*
* var idx = gindexOfGreaterThanSorted.ndarray( x.length, 2.0, x, 1, 0 );
* // returns 3
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
