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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ieXguc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJkb3VidCIsInJlcXVpcmUiLCJmYWx6eSIsImZpbGxlZCIsInBobGF0IiwibmJ5eCIsImFycmF5IiwibGltaXQiLCJBU19BUlJBWSIsIkVycm9yIiwicmVkdWNlIiwibWFwIiwiZWxlbWVudCIsInNldCIsImZpbHRlciIsImxlbmd0aCIsInBvcCIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyREEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1FLFNBQVNGLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUcsUUFBUUgsUUFBUyxPQUFULENBQWQ7O0FBRUEsSUFBTUksT0FBTyxTQUFTQSxJQUFULENBQWVDLEtBQWYsRUFBc0JDLEtBQXRCLEVBQTZCO0FBQ3pDOzs7Ozs7Ozs7Ozs7QUFZQSxLQUFJLENBQUNQLE1BQU9NLEtBQVAsRUFBY0UsUUFBZCxDQUFMLEVBQStCO0FBQzlCLFFBQU0sSUFBSUMsS0FBSixDQUFXLGVBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlQLE1BQU9LLEtBQVAsS0FBa0IsT0FBT0EsS0FBUCxJQUFnQixRQUF0QyxFQUFnRDtBQUMvQyxRQUFNLElBQUlFLEtBQUosQ0FBVyxlQUFYLENBQU47QUFDQTs7QUFFREgsU0FBUUYsTUFBT0UsS0FBUCxDQUFSOztBQUVBLEtBQUlDLFFBQVEsQ0FBWixFQUFlO0FBQ2QsU0FBT0QsS0FBUDtBQUNBOztBQUVELFFBQU9BLE1BQU1JLE1BQU4sQ0FBYyxVQUFFQyxHQUFGLEVBQU9DLE9BQVAsRUFBb0I7QUFDeEMsTUFBSUMsTUFBTUYsSUFBSUcsTUFBSixDQUFZLFVBQUVELEdBQUYsVUFBYUEsSUFBSUUsTUFBSixHQUFhUixLQUExQixFQUFaLEVBQWdEUyxHQUFoRCxFQUFWOztBQUVBSCxNQUFJSSxJQUFKLENBQVVMLE9BQVY7O0FBRUEsTUFBSUMsSUFBSUUsTUFBSixJQUFjUixLQUFsQixFQUF5QjtBQUN4QkksT0FBSU0sSUFBSixDQUFVLEVBQVY7O0FBRUEsVUFBT04sR0FBUDtBQUNBOztBQUVELFNBQU9BLEdBQVA7QUFDQSxFQVpNLEVBWUosQ0FBRSxFQUFGLENBWkksRUFZTUcsTUFaTixDQVljWCxNQVpkLENBQVA7QUFhQSxDQXhDRDs7QUEwQ0FlLE9BQU9DLE9BQVAsR0FBaUJkLElBQWpCIiwiZmlsZSI6Im5ieXguc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwibmJ5eFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwibmJ5eC9uYnl4LmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJuYnl4LmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcIm5ieXhcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL25ieXguZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJuYnl4LXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0UmVkdWNlIGFycmF5IGludG8gTiBieSBYIG1hdHJpeC5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiZG91YnRcIjogXCJkb3VidFwiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcImZpbGxlZFwiOiBcImZpbGxlZFwiLFxuXHRcdFx0XCJwaGxhdFwiOiBcInBobGF0XCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgZG91YnQgPSByZXF1aXJlKCBcImRvdWJ0XCIgKTtcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCBmaWxsZWQgPSByZXF1aXJlKCBcImZpbGxlZFwiICk7XG5jb25zdCBwaGxhdCA9IHJlcXVpcmUoIFwicGhsYXRcIiApO1xuXG5jb25zdCBuYnl4ID0gZnVuY3Rpb24gbmJ5eCggYXJyYXksIGxpbWl0ICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiYXJyYXk6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdEFycmF5LFxuXHRcdFx0XHRcdFwiWypdXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJsaW1pdDpyZXF1aXJlZFwiOiBcIm51bWJlclwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggIWRvdWJ0KCBhcnJheSwgQVNfQVJSQVkgKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGFycmF5XCIgKTtcblx0fVxuXG5cdGlmKCBmYWx6eSggbGltaXQgKSB8fCB0eXBlb2YgbGltaXQgIT0gXCJudW1iZXJcIiApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGxpbWl0XCIgKTtcblx0fVxuXG5cdGFycmF5ID0gcGhsYXQoIGFycmF5ICk7XG5cblx0aWYoIGxpbWl0IDwgMiApe1xuXHRcdHJldHVybiBhcnJheTtcblx0fVxuXG5cdHJldHVybiBhcnJheS5yZWR1Y2UoICggbWFwLCBlbGVtZW50ICkgPT4ge1xuXHRcdGxldCBzZXQgPSBtYXAuZmlsdGVyKCAoIHNldCApID0+ICggc2V0Lmxlbmd0aCA8IGxpbWl0ICkgKS5wb3AoICk7XG5cblx0XHRzZXQucHVzaCggZWxlbWVudCApO1xuXG5cdFx0aWYoIHNldC5sZW5ndGggPT0gbGltaXQgKXtcblx0XHRcdG1hcC5wdXNoKCBbIF0gKTtcblxuXHRcdFx0cmV0dXJuIG1hcDtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWFwO1xuXHR9LCBbIFsgXSBdICkuZmlsdGVyKCBmaWxsZWQgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbmJ5eDtcbiJdfQ==
//# sourceMappingURL=nbyx.support.js.map
