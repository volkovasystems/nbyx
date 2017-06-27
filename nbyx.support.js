"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "nbyx",
              			"path": "nbyx/nbyx.js",
              			"file": "nbyx.js",
              			"module": "nbyx",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/nbyx.git",
              			"test": "nbyx-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Reduce array into N by X matrix.
              	@end-module-documentation
              
              	@include:
              		{
              			"doubt": "doubt",
              			"falzy": "falzy",
              			"filled": "filled",
              			"phlat": "phlat",
              			"protype": "protype",
              		}
              	@end-include
              */

var doubt = require("doubt");
var falzy = require("falzy");
var filled = require("filled");
var phlat = require("phlat");
var protype = require("protype");

var nbyx = function nbyx(array, limit) {
	/*;
                                        	@meta-configuration:
                                        		{
                                        			"array:required": [
                                        				Array,
                                        				"[*]"
                                        			],
                                        			"limit:required": "number"
                                        		}
                                        	@end-meta-configuration
                                        */

	if (!doubt(array, AS_ARRAY)) {
		throw new Error("invalid array");
	}

	if (falzy(limit) || !protype(limit, NUMBER)) {
		throw new Error("invalid limit");
	}

	array = phlat(array);

	if (limit < 2) {
		return array;
	}

	return array.reduce(function (map, element) {
		var set = map.filter(function (set) {return set.length < limit;}).pop();

		set.push(element);

		if (set.length == limit) {
			map.push([]);

			return map;
		}

		return map;
	}, [[]]).filter(filled);
};

module.exports = nbyx;

//# sourceMappingURL=nbyx.support.js.map