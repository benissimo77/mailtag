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
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
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
	
	exports.default = AutoComplete;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzZlM2M0Y2YwMDM5MmM5ZDMwM2QiLCJ3ZWJwYWNrOi8vLy4vQXV0b0NvbXBsZXRlQ29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJBdXRvQ29tcGxldGUiLCJSZWFjdCIsImNyZWF0ZUNsYXNzIiwicHJvcFR5cGVzIiwiaXRlbXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJpbmRleCIsIm51bWJlciIsInZpc2libGUiLCJib29sIiwicmVuZGVyIiwiY3JlYXRlSXRlbSIsIml0ZW0iLCJzZWxlY3RlZENsYXNzIiwicHJvcHMiLCJmbG9hdCIsImJvcmRlciIsIm1haWwiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwiZm9udFNpemUiLCJkaXNwbGF5TmFtZSIsInVzZWQiLCJtYXAiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQSxLQUFNQSxlQUFlQyxNQUFNQyxXQUFOLENBQWtCO0FBQUE7O0FBQ3RDQyxhQUFXO0FBQ1ZDLFVBQU9ILE1BQU1JLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQyxVQURuQjtBQUVWQyxVQUFPUCxNQUFNSSxTQUFOLENBQWdCSSxNQUFoQixDQUF1QkYsVUFGcEI7QUFHVkcsWUFBU1QsTUFBTUksU0FBTixDQUFnQk0sSUFBaEIsQ0FBcUJKO0FBSHBCLEdBRDJCOztBQU90Q0ssVUFBUSxrQkFBVzs7QUFFbEIsT0FBSUMsYUFBYSxTQUFiQSxVQUFhLENBQVNDLElBQVQsRUFBZU4sS0FBZixFQUFzQjtBQUN0QyxRQUFJTyxnQkFBZ0JQLFNBQVMsS0FBS1EsS0FBTCxDQUFXUixLQUFwQixHQUE0QixVQUE1QixHQUF5QyxFQUE3RDs7QUFFQSxXQUNDO0FBQUE7QUFBQSxPQUFJLEtBQUtBLEtBQVQsRUFBZ0IsV0FBTyxxQkFBcUJPLGFBQTVDO0FBQ0M7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFNBQUssT0FBUSxFQUFDRSxPQUFPLE1BQVIsRUFBZ0JDLFFBQU8sbUJBQXZCLEVBQWI7QUFDRCxvQ0FBSyxLQUFLLDBCQUEwQkosS0FBS0ssSUFBL0IsR0FBc0MsVUFBaEQsRUFBNEQsT0FBTSxJQUFsRSxFQUF1RSxRQUFPLElBQTlFO0FBREMsT0FERjtBQUlFO0FBQUE7QUFBQSxTQUFLLE9BQVEsRUFBQ0YsT0FBTSxNQUFQLEVBQWVHLFlBQVksQ0FBM0IsRUFBYjtBQUNEO0FBQUE7QUFBQSxVQUFLLE9BQVEsRUFBQ0MsV0FBVyxDQUFaLEVBQWI7QUFDRTtBQUFBO0FBQUE7QUFBSztBQUFBO0FBQUEsWUFBTSxPQUFRLEVBQUNDLFVBQVUsRUFBWCxFQUFkO0FBQWdDUixlQUFLUyxXQUFyQztBQUFBO0FBQW9EVCxlQUFLVSxJQUF6RDtBQUFBO0FBQUE7QUFBTCxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUs7QUFBQTtBQUFBLFlBQU0sT0FBUSxFQUFDRixVQUFVLEVBQVgsRUFBZDtBQUFnQ1IsZUFBS0s7QUFBckM7QUFBTDtBQUZGO0FBREM7QUFKRjtBQURELEtBREQ7QUFlQSxJQWxCRDtBQW1CQSxPQUFJZixRQUFRLEtBQUtZLEtBQUwsQ0FBV1osS0FBWCxDQUFpQnFCLEdBQWpCLENBQXNCWixVQUF0QixFQUFrQyxJQUFsQyxDQUFaOztBQUVBLFVBQVMsS0FBS0csS0FBTCxDQUFXTixPQUFYLElBQ1I7QUFBQTtBQUFBLE1BQUssSUFBRyxjQUFSO0FBQ0M7QUFBQTtBQUFBLE9BQUksV0FBTSxpQkFBVjtBQUNHTjtBQURIO0FBREQsSUFERDtBQU9BO0FBckNxQyxFQUFsQixDQUFyQjs7bUJBd0NlSixZIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYzZlM2M0Y2YwMDM5MmM5ZDMwM2RcbiAqKi8iLCJcclxuY29uc3QgQXV0b0NvbXBsZXRlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cdHByb3BUeXBlczoge1xyXG5cdFx0aXRlbXM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG5cdFx0aW5kZXg6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuXHRcdHZpc2libGU6IFJlYWN0LlByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWRcclxuXHR9LFxyXG5cclxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG5cdFxyXG5cdFx0dmFyIGNyZWF0ZUl0ZW0gPSBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xyXG5cdFx0XHR2YXIgc2VsZWN0ZWRDbGFzcyA9IGluZGV4ID09IHRoaXMucHJvcHMuaW5kZXggPyBcInNlbGVjdGVkXCIgOiBcIlwiO1xyXG5cclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQ8bGkga2V5PXtpbmRleH0gY2xhc3M9e1wic3VnZ2VzdGlvbi1pdGVtIFwiICsgc2VsZWN0ZWRDbGFzc30+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0ICA8ZGl2IHN0eWxlPXsge2Zsb2F0OiAnbGVmdCcsIGJvcmRlcjonMXB4ICNjY2NjZGQgc29saWQnfSB9PlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz17J2h0dHBzOi8vcm9ib2hhc2gub3JnLycgKyBpdGVtLm1haWwgKyAnL3NpemU9NjQnfSB3aWR0aD1cIjY0XCIgaGVpZ2h0PVwiNjRcIi8+XHJcblx0XHRcdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHRcdFx0ICA8ZGl2IHN0eWxlPXsge2Zsb2F0OidsZWZ0JywgbWFyZ2luTGVmdDogNX0gfT5cclxuXHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17IHttYXJnaW5Ub3A6IDV9IH0+XHJcblx0XHRcdFx0XHRcdCAgPGRpdj48c3BhbiBzdHlsZT17IHtmb250U2l6ZTogMTZ9IH0+e2l0ZW0uZGlzcGxheU5hbWV9ICh7aXRlbS51c2VkfSk8L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHRcdCAgPGRpdj48c3BhbiBzdHlsZT17IHtmb250U2l6ZTogMTR9IH0+e2l0ZW0ubWFpbH08L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0XHR2YXIgaXRlbXMgPSB0aGlzLnByb3BzLml0ZW1zLm1hcCggY3JlYXRlSXRlbSwgdGhpcyApO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gKCB0aGlzLnByb3BzLnZpc2libGUgJiZcclxuXHRcdFx0PGRpdiBpZD1cImF1dG9jb21wbGV0ZVwiPlxyXG5cdFx0XHRcdDx1bCBjbGFzcz1cInN1Z2dlc3Rpb24tbGlzdFwiPlxyXG5cdFx0XHRcdFx0eyBpdGVtcyB9XHJcblx0XHRcdFx0PC91bD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdCk7XHJcblx0fVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dG9Db21wbGV0ZTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9BdXRvQ29tcGxldGVDb21wb25lbnQuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==