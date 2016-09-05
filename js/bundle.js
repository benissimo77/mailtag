/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	var AutoComplete = React.createClass({
		displayName: "AutoComplete",
	
		propTypes: {
			items: React.PropTypes.array.isRequired,
			index: React.PropTypes.number.isRequired,
			visible: React.PropTypes.bool.isRequired
		},
	
		render: function render() {
	
			var createItem = function createItem(item, index) {
				var selectedClass = index == this.props.index ? "selected" : "";
	
				return React.createElement(
					"li",
					{ key: index, className: "suggestion-item " + selectedClass },
					React.createElement(
						"div",
						null,
						React.createElement(
							"div",
							{ style: { float: 'left', border: '1px #ccccdd solid' } },
							React.createElement("img", { src: 'https://robohash.org/' + item.mail + '/size=64', width: "64", height: "64" })
						),
						React.createElement(
							"div",
							{ style: { float: 'left', marginLeft: 5 } },
							React.createElement(
								"div",
								{ style: { marginTop: 5 } },
								React.createElement(
									"div",
									null,
									React.createElement(
										"span",
										{ style: { fontSize: 16 } },
										item.displayName,
										" (",
										item.used,
										")"
									)
								),
								React.createElement(
									"div",
									null,
									React.createElement(
										"span",
										{ style: { fontSize: 14 } },
										item.mail
									)
								)
							)
						)
					)
				);
			};
			var items = this.props.items.map(createItem, this);
	
			return this.props.visible && React.createElement(
				"div",
				{ id: "autocomplete" },
				React.createElement(
					"ul",
					{ className: "suggestion-list" },
					items
				)
			);
		}
	});
	
	cupenyaApp.value('AutoCompleteComponent', AutoComplete);

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODY1MzEyYjk1YzJkZDZkZDM0NmMiLCJ3ZWJwYWNrOi8vLy4vQXV0b0NvbXBsZXRlQ29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJBdXRvQ29tcGxldGUiLCJSZWFjdCIsImNyZWF0ZUNsYXNzIiwicHJvcFR5cGVzIiwiaXRlbXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJpbmRleCIsIm51bWJlciIsInZpc2libGUiLCJib29sIiwicmVuZGVyIiwiY3JlYXRlSXRlbSIsIml0ZW0iLCJzZWxlY3RlZENsYXNzIiwicHJvcHMiLCJmbG9hdCIsImJvcmRlciIsIm1haWwiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwiZm9udFNpemUiLCJkaXNwbGF5TmFtZSIsInVzZWQiLCJtYXAiLCJjdXBlbnlhQXBwIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckNBLEtBQU1BLGVBQWVDLE1BQU1DLFdBQU4sQ0FBa0I7QUFBQTs7QUFDdENDLGFBQVc7QUFDVkMsVUFBT0gsTUFBTUksU0FBTixDQUFnQkMsS0FBaEIsQ0FBc0JDLFVBRG5CO0FBRVZDLFVBQU9QLE1BQU1JLFNBQU4sQ0FBZ0JJLE1BQWhCLENBQXVCRixVQUZwQjtBQUdWRyxZQUFTVCxNQUFNSSxTQUFOLENBQWdCTSxJQUFoQixDQUFxQko7QUFIcEIsR0FEMkI7O0FBT3RDSyxVQUFRLGtCQUFXOztBQUVsQixPQUFJQyxhQUFhLFNBQWJBLFVBQWEsQ0FBU0MsSUFBVCxFQUFlTixLQUFmLEVBQXNCO0FBQ3RDLFFBQUlPLGdCQUFnQlAsU0FBUyxLQUFLUSxLQUFMLENBQVdSLEtBQXBCLEdBQTRCLFVBQTVCLEdBQXlDLEVBQTdEOztBQUVBLFdBQ0M7QUFBQTtBQUFBLE9BQUksS0FBS0EsS0FBVCxFQUFnQixXQUFPLHFCQUFxQk8sYUFBNUM7QUFDQztBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsU0FBSyxPQUFRLEVBQUNFLE9BQU8sTUFBUixFQUFnQkMsUUFBTyxtQkFBdkIsRUFBYjtBQUNELG9DQUFLLEtBQUssMEJBQTBCSixLQUFLSyxJQUEvQixHQUFzQyxVQUFoRCxFQUE0RCxPQUFNLElBQWxFLEVBQXVFLFFBQU8sSUFBOUU7QUFEQyxPQURGO0FBSUU7QUFBQTtBQUFBLFNBQUssT0FBUSxFQUFDRixPQUFNLE1BQVAsRUFBZUcsWUFBWSxDQUEzQixFQUFiO0FBQ0Q7QUFBQTtBQUFBLFVBQUssT0FBUSxFQUFDQyxXQUFXLENBQVosRUFBYjtBQUNFO0FBQUE7QUFBQTtBQUFLO0FBQUE7QUFBQSxZQUFNLE9BQVEsRUFBQ0MsVUFBVSxFQUFYLEVBQWQ7QUFBZ0NSLGVBQUtTLFdBQXJDO0FBQUE7QUFBb0RULGVBQUtVLElBQXpEO0FBQUE7QUFBQTtBQUFMLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBSztBQUFBO0FBQUEsWUFBTSxPQUFRLEVBQUNGLFVBQVUsRUFBWCxFQUFkO0FBQWdDUixlQUFLSztBQUFyQztBQUFMO0FBRkY7QUFEQztBQUpGO0FBREQsS0FERDtBQWVBLElBbEJEO0FBbUJBLE9BQUlmLFFBQVEsS0FBS1ksS0FBTCxDQUFXWixLQUFYLENBQWlCcUIsR0FBakIsQ0FBc0JaLFVBQXRCLEVBQWtDLElBQWxDLENBQVo7O0FBRUEsVUFBUyxLQUFLRyxLQUFMLENBQVdOLE9BQVgsSUFDUjtBQUFBO0FBQUEsTUFBSyxJQUFHLGNBQVI7QUFDQztBQUFBO0FBQUEsT0FBSSxXQUFNLGlCQUFWO0FBQ0dOO0FBREg7QUFERCxJQUREO0FBT0E7QUFyQ3FDLEVBQWxCLENBQXJCOztBQXdDQXNCLFlBQVdDLEtBQVgsQ0FBaUIsdUJBQWpCLEVBQTBDM0IsWUFBMUMsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDg2NTMxMmI5NWMyZGQ2ZGQzNDZjXG4gKiovIiwiXHJcbmNvbnN0IEF1dG9Db21wbGV0ZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuXHRwcm9wVHlwZXM6IHtcclxuXHRcdGl0ZW1zOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuXHRcdGluZGV4OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcblx0XHR2aXNpYmxlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXHJcblx0fSxcclxuXHJcblx0cmVuZGVyOiBmdW5jdGlvbigpIHtcclxuXHRcclxuXHRcdHZhciBjcmVhdGVJdGVtID0gZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcclxuXHRcdFx0dmFyIHNlbGVjdGVkQ2xhc3MgPSBpbmRleCA9PSB0aGlzLnByb3BzLmluZGV4ID8gXCJzZWxlY3RlZFwiIDogXCJcIjtcclxuXHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PGxpIGtleT17aW5kZXh9IGNsYXNzPXtcInN1Z2dlc3Rpb24taXRlbSBcIiArIHNlbGVjdGVkQ2xhc3N9PlxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdCAgPGRpdiBzdHlsZT17IHtmbG9hdDogJ2xlZnQnLCBib3JkZXI6JzFweCAjY2NjY2RkIHNvbGlkJ30gfT5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9eydodHRwczovL3JvYm9oYXNoLm9yZy8nICsgaXRlbS5tYWlsICsgJy9zaXplPTY0J30gd2lkdGg9XCI2NFwiIGhlaWdodD1cIjY0XCIvPlxyXG5cdFx0XHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0XHRcdCAgPGRpdiBzdHlsZT17IHtmbG9hdDonbGVmdCcsIG1hcmdpbkxlZnQ6IDV9IH0+XHJcblx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9eyB7bWFyZ2luVG9wOiA1fSB9PlxyXG5cdFx0XHRcdFx0XHQgIDxkaXY+PHNwYW4gc3R5bGU9eyB7Zm9udFNpemU6IDE2fSB9PntpdGVtLmRpc3BsYXlOYW1lfSAoe2l0ZW0udXNlZH0pPC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQgIDxkaXY+PHNwYW4gc3R5bGU9eyB7Zm9udFNpemU6IDE0fSB9PntpdGVtLm1haWx9PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdCAgPC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0dmFyIGl0ZW1zID0gdGhpcy5wcm9wcy5pdGVtcy5tYXAoIGNyZWF0ZUl0ZW0sIHRoaXMgKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuICggdGhpcy5wcm9wcy52aXNpYmxlICYmXHJcblx0XHRcdDxkaXYgaWQ9XCJhdXRvY29tcGxldGVcIj5cclxuXHRcdFx0XHQ8dWwgY2xhc3M9XCJzdWdnZXN0aW9uLWxpc3RcIj5cclxuXHRcdFx0XHRcdHsgaXRlbXMgfVxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpO1xyXG5cdH1cclxufSk7XHJcblxyXG5jdXBlbnlhQXBwLnZhbHVlKCdBdXRvQ29tcGxldGVDb21wb25lbnQnLCBBdXRvQ29tcGxldGUpXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vQXV0b0NvbXBsZXRlQ29tcG9uZW50LmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=