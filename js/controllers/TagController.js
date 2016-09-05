'use strict';

cupenyaApp.controller( "TagController", TagController);

    TagController.$inject = ['$scope', '$window', '$http'];

    function TagController($scope, $window, $http) {

		$scope.taglist = TagList();
		$scope.suggestionlist = SuggestionList();
		
		$http.get('db.json').then(function(response) {
			$scope.suggestionlist.set(response.data);
		});

		function parseString(str) {
			var tags = str.split(";");
			for (var tag in tags) {
				var newTag = $scope.taglist.newTag(tags[tag]);
				$scope.suggestionlist.addItem(newTag);
			}
		}
		
		$scope.keyUp = function(ev) {

			var KEYS = {
				enter: 13,
				up: 38,
				down: 40,
				left: 37,
				right: 39,
			};

			switch (ev.keyCode) {
					
				case KEYS.down:
				case KEYS.right:
					$scope.suggestionlist.selectNext();
					break;
					
				case KEYS.up:
				case KEYS.left:
					$scope.suggestionlist.selectPrior();
					break;
										
				case KEYS.enter:
					if ($scope.suggestionlist.selected) {
						$scope.taglist.addTag($scope.suggestionlist.selected);
						var newTag = $scope.suggestionlist.selected;
					} else {
						parseString(ev.target.value);
					}
					ev.target.value = "";
					// fall through to default condition

				default:
					$scope.suggestionlist.filteritems(ev.target.value);
					
			}
		}
		
    }


