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
              			"phlat": "phlat"
              		}
              	@end-include
              */

var doubt = require("doubt");
var falzy = require("falzy");
var filled = require("filled");
var phlat = require("phlat");

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

	if (falzy(limit) || typeof limit != "number") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ieXguc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJkb3VidCIsInJlcXVpcmUiLCJmYWx6eSIsImZpbGxlZCIsInBobGF0IiwibmJ5eCIsImFycmF5IiwibGltaXQiLCJBU19BUlJBWSIsIkVycm9yIiwicmVkdWNlIiwibWFwIiwiZWxlbWVudCIsInNldCIsImZpbHRlciIsImxlbmd0aCIsInBvcCIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyREEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1FLFNBQVNGLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUcsUUFBUUgsUUFBUyxPQUFULENBQWQ7O0FBRUEsSUFBTUksT0FBTyxTQUFTQSxJQUFULENBQWVDLEtBQWYsRUFBc0JDLEtBQXRCLEVBQTZCO0FBQ3pDOzs7Ozs7Ozs7Ozs7QUFZQSxLQUFJLENBQUNQLE1BQU9NLEtBQVAsRUFBY0UsUUFBZCxDQUFMLEVBQStCO0FBQzlCLFFBQU0sSUFBSUMsS0FBSixDQUFXLGVBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlQLE1BQU9LLEtBQVAsS0FBa0IsT0FBT0EsS0FBUCxJQUFnQixRQUF0QyxFQUFnRDtBQUMvQyxRQUFNLElBQUlFLEtBQUosQ0FBVyxlQUFYLENBQU47QUFDQTs7QUFFREgsU0FBUUYsTUFBT0UsS0FBUCxDQUFSOztBQUVBLEtBQUlDLFFBQVEsQ0FBWixFQUFlO0FBQ2QsU0FBT0QsS0FBUDtBQUNBOztBQUVELFFBQU9BLE1BQU1JLE1BQU4sQ0FBYyxVQUFFQyxHQUFGLEVBQU9DLE9BQVAsRUFBb0I7QUFDeEMsTUFBSUMsTUFBTUYsSUFBSUcsTUFBSixDQUFZLFVBQUVELEdBQUYsVUFBYUEsSUFBSUUsTUFBSixHQUFhUixLQUExQixFQUFaLEVBQWdEUyxHQUFoRCxFQUFWOztBQUVBSCxNQUFJSSxJQUFKLENBQVVMLE9BQVY7O0FBRUEsTUFBSUMsSUFBSUUsTUFBSixJQUFjUixLQUFsQixFQUF5QjtBQUN4QkksT0FBSU0sSUFBSixDQUFVLEVBQVY7O0FBRUEsVUFBT04sR0FBUDtBQUNBOztBQUVELFNBQU9BLEdBQVA7QUFDQSxFQVpNLEVBWUosQ0FBRSxFQUFGLENBWkksRUFZTUcsTUFaTixDQVljWCxNQVpkLENBQVA7QUFhQSxDQXhDRDs7QUEwQ0FlLE9BQU9DLE9BQVAsR0FBaUJkLElBQWpCIiwiZmlsZSI6Im5ieXguc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJuYnl4XCIsXHJcblx0XHRcdFwicGF0aFwiOiBcIm5ieXgvbmJ5eC5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJuYnl4LmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwibmJ5eFwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9uYnl4LmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJuYnl4LXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0UmVkdWNlIGFycmF5IGludG8gTiBieSBYIG1hdHJpeC5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImRvdWJ0XCI6IFwiZG91YnRcIixcclxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXHJcblx0XHRcdFwiZmlsbGVkXCI6IFwiZmlsbGVkXCIsXHJcblx0XHRcdFwicGhsYXRcIjogXCJwaGxhdFwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBkb3VidCA9IHJlcXVpcmUoIFwiZG91YnRcIiApO1xyXG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xyXG5jb25zdCBmaWxsZWQgPSByZXF1aXJlKCBcImZpbGxlZFwiICk7XHJcbmNvbnN0IHBobGF0ID0gcmVxdWlyZSggXCJwaGxhdFwiICk7XHJcblxyXG5jb25zdCBuYnl4ID0gZnVuY3Rpb24gbmJ5eCggYXJyYXksIGxpbWl0ICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJhcnJheTpyZXF1aXJlZFwiOiBbXHJcblx0XHRcdFx0XHRBcnJheSxcclxuXHRcdFx0XHRcdFwiWypdXCJcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdFwibGltaXQ6cmVxdWlyZWRcIjogXCJudW1iZXJcIlxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCAhZG91YnQoIGFycmF5LCBBU19BUlJBWSApICl7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBhcnJheVwiICk7XHJcblx0fVxyXG5cclxuXHRpZiggZmFsenkoIGxpbWl0ICkgfHwgdHlwZW9mIGxpbWl0ICE9IFwibnVtYmVyXCIgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGxpbWl0XCIgKTtcclxuXHR9XHJcblxyXG5cdGFycmF5ID0gcGhsYXQoIGFycmF5ICk7XHJcblxyXG5cdGlmKCBsaW1pdCA8IDIgKXtcclxuXHRcdHJldHVybiBhcnJheTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBhcnJheS5yZWR1Y2UoICggbWFwLCBlbGVtZW50ICkgPT4ge1xyXG5cdFx0bGV0IHNldCA9IG1hcC5maWx0ZXIoICggc2V0ICkgPT4gKCBzZXQubGVuZ3RoIDwgbGltaXQgKSApLnBvcCggKTtcclxuXHJcblx0XHRzZXQucHVzaCggZWxlbWVudCApO1xyXG5cclxuXHRcdGlmKCBzZXQubGVuZ3RoID09IGxpbWl0ICl7XHJcblx0XHRcdG1hcC5wdXNoKCBbIF0gKTtcclxuXHJcblx0XHRcdHJldHVybiBtYXA7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG1hcDtcclxuXHR9LCBbIFsgXSBdICkuZmlsdGVyKCBmaWxsZWQgKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbmJ5eDtcclxuIl19
//# sourceMappingURL=nbyx.support.js.map
