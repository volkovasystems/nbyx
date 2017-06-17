
const assert = require( "assert" );
const nbyx = require( "./nbyx.js" );

assert.deepEqual( nbyx( [ 1, 2, 3, 4, 5, 6, 7, 8 ], 2 ), [
	[ 1, 2 ],
	[ 3, 4 ],
	[ 5, 6 ],
	[ 7, 8 ]
], "should be deeply equal" );

assert.deepEqual( nbyx( [ 1, 2, 3, 4, 5, 6, 7, 8 ], 3 ), [
	[ 1, 2, 3 ],
	[ 4, 5, 6 ],
	[ 7, 8 ]
], "should be deeply equal" );

console.log( "ok" );
