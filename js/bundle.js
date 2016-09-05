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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODY1MzEyYjk1YzJkZDZkZDM0NmMiLCJ3ZWJwYWNrOi8vLy4vQXV0b0NvbXBsZXRlQ29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJBdXRvQ29tcGxldGUiLCJSZWFjdCIsImNyZWF0ZUNsYXNzIiwicHJvcFR5cGVzIiwiaXRlbXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJpbmRleCIsIm51bWJlciIsInZpc2libGUiLCJib29sIiwicmVuZGVyIiwiY3JlYXRlSXRlbSIsIml0ZW0iLCJzZWxlY3RlZENsYXNzIiwicHJvcHMiLCJmbG9hdCIsImJvcmRlciIsIm1haWwiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwiZm9udFNpemUiLCJkaXNwbGF5TmFtZSIsInVzZWQiLCJtYXAiLCJjdXBlbnlhQXBwIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckNBLEtBQUlBLGVBQWVDLE1BQU1DLFdBQU4sQ0FBa0I7QUFBQTs7QUFDcENDLGFBQVc7QUFDVkMsVUFBT0gsTUFBTUksU0FBTixDQUFnQkMsS0FBaEIsQ0FBc0JDLFVBRG5CO0FBRVZDLFVBQU9QLE1BQU1JLFNBQU4sQ0FBZ0JJLE1BQWhCLENBQXVCRixVQUZwQjtBQUdWRyxZQUFTVCxNQUFNSSxTQUFOLENBQWdCTSxJQUFoQixDQUFxQko7QUFIcEIsR0FEeUI7O0FBT3BDSyxVQUFRLGtCQUFXOztBQUVsQixPQUFJQyxhQUFhLFNBQWJBLFVBQWEsQ0FBU0MsSUFBVCxFQUFlTixLQUFmLEVBQXNCO0FBQ3RDLFFBQUlPLGdCQUFnQlAsU0FBUyxLQUFLUSxLQUFMLENBQVdSLEtBQXBCLEdBQTRCLFVBQTVCLEdBQXlDLEVBQTdEOztBQUVBLFdBQ0M7QUFBQTtBQUFBLE9BQUksS0FBS0EsS0FBVCxFQUFnQixXQUFPLHFCQUFxQk8sYUFBNUM7QUFDQztBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsU0FBSyxPQUFRLEVBQUNFLE9BQU8sTUFBUixFQUFnQkMsUUFBTyxtQkFBdkIsRUFBYjtBQUNELG9DQUFLLEtBQUssMEJBQTBCSixLQUFLSyxJQUEvQixHQUFzQyxVQUFoRCxFQUE0RCxPQUFNLElBQWxFLEVBQXVFLFFBQU8sSUFBOUU7QUFEQyxPQURGO0FBSUU7QUFBQTtBQUFBLFNBQUssT0FBUSxFQUFDRixPQUFNLE1BQVAsRUFBZUcsWUFBWSxDQUEzQixFQUFiO0FBQ0Q7QUFBQTtBQUFBLFVBQUssT0FBUSxFQUFDQyxXQUFXLENBQVosRUFBYjtBQUNFO0FBQUE7QUFBQTtBQUFLO0FBQUE7QUFBQSxZQUFNLE9BQVEsRUFBQ0MsVUFBVSxFQUFYLEVBQWQ7QUFBZ0NSLGVBQUtTLFdBQXJDO0FBQUE7QUFBb0RULGVBQUtVLElBQXpEO0FBQUE7QUFBQTtBQUFMLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBSztBQUFBO0FBQUEsWUFBTSxPQUFRLEVBQUNGLFVBQVUsRUFBWCxFQUFkO0FBQWdDUixlQUFLSztBQUFyQztBQUFMO0FBRkY7QUFEQztBQUpGO0FBREQsS0FERDtBQWVBLElBbEJEO0FBbUJBLE9BQUlmLFFBQVEsS0FBS1ksS0FBTCxDQUFXWixLQUFYLENBQWlCcUIsR0FBakIsQ0FBc0JaLFVBQXRCLEVBQWtDLElBQWxDLENBQVo7O0FBRUEsVUFBUyxLQUFLRyxLQUFMLENBQVdOLE9BQVgsSUFDUjtBQUFBO0FBQUEsTUFBSyxJQUFHLGNBQVI7QUFDQztBQUFBO0FBQUEsT0FBSSxXQUFNLGlCQUFWO0FBQ0dOO0FBREg7QUFERCxJQUREO0FBT0E7QUFyQ21DLEVBQWxCLENBQW5COztBQXdDQXNCLFlBQVdDLEtBQVgsQ0FBaUIsdUJBQWpCLEVBQTBDM0IsWUFBMUMsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDg2NTMxMmI5NWMyZGQ2ZGQzNDZjXG4gKiovIiwiXHJcbnZhciBBdXRvQ29tcGxldGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcblx0cHJvcFR5cGVzOiB7XHJcblx0XHRpdGVtczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcblx0XHRpbmRleDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG5cdFx0dmlzaWJsZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxyXG5cdH0sXHJcblxyXG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcblx0XHJcblx0XHR2YXIgY3JlYXRlSXRlbSA9IGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XHJcblx0XHRcdHZhciBzZWxlY3RlZENsYXNzID0gaW5kZXggPT0gdGhpcy5wcm9wcy5pbmRleCA/IFwic2VsZWN0ZWRcIiA6IFwiXCI7XHJcblxyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxsaSBrZXk9e2luZGV4fSBjbGFzcz17XCJzdWdnZXN0aW9uLWl0ZW0gXCIgKyBzZWxlY3RlZENsYXNzfT5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQgIDxkaXYgc3R5bGU9eyB7ZmxvYXQ6ICdsZWZ0JywgYm9yZGVyOicxcHggI2NjY2NkZCBzb2xpZCd9IH0+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPXsnaHR0cHM6Ly9yb2JvaGFzaC5vcmcvJyArIGl0ZW0ubWFpbCArICcvc2l6ZT02NCd9IHdpZHRoPVwiNjRcIiBoZWlnaHQ9XCI2NFwiLz5cclxuXHRcdFx0XHRcdCAgPC9kaXY+XHJcblx0XHRcdFx0XHQgIDxkaXYgc3R5bGU9eyB7ZmxvYXQ6J2xlZnQnLCBtYXJnaW5MZWZ0OiA1fSB9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXsge21hcmdpblRvcDogNX0gfT5cclxuXHRcdFx0XHRcdFx0ICA8ZGl2PjxzcGFuIHN0eWxlPXsge2ZvbnRTaXplOiAxNn0gfT57aXRlbS5kaXNwbGF5TmFtZX0gKHtpdGVtLnVzZWR9KTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0ICA8ZGl2PjxzcGFuIHN0eWxlPXsge2ZvbnRTaXplOiAxNH0gfT57aXRlbS5tYWlsfTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdHZhciBpdGVtcyA9IHRoaXMucHJvcHMuaXRlbXMubWFwKCBjcmVhdGVJdGVtLCB0aGlzICk7XHJcblx0XHRcclxuXHRcdHJldHVybiAoIHRoaXMucHJvcHMudmlzaWJsZSAmJlxyXG5cdFx0XHQ8ZGl2IGlkPVwiYXV0b2NvbXBsZXRlXCI+XHJcblx0XHRcdFx0PHVsIGNsYXNzPVwic3VnZ2VzdGlvbi1saXN0XCI+XHJcblx0XHRcdFx0XHR7IGl0ZW1zIH1cclxuXHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KTtcclxuXHR9XHJcbn0pO1xyXG5cclxuY3VwZW55YUFwcC52YWx1ZSgnQXV0b0NvbXBsZXRlQ29tcG9uZW50JywgQXV0b0NvbXBsZXRlKVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0F1dG9Db21wbGV0ZUNvbXBvbmVudC5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9