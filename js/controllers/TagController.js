'use strict';

cupenyaApp.controller( "TagController", TagController);

    TagController.$inject = ['$scope', '$http'];

    function TagController($scope, $http) {

		$scope.taglist = TagList();
		$scope.suggestionlist = SuggestionList();
		
		$http.get('db.json').then(function(response) {
			$scope.suggestionlist.set(response.data);
		});

		// TODO: improved string parsing, Regexp xxx <x@xx.xx>
		function parseString(str) {
			var tags = str.split(";");
			return tags;
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
					} else {
						var newTag, tags = parseString(ev.target.value);
						for (var tag in tags) {
							newTag = $scope.taglist.newTag(tags[tag]);
							$scope.suggestionlist.addItem(newTag);
						}
					}
					ev.target.value = "";
					// fall through to default condition

				default:
					$scope.suggestionlist.filteritems(ev.target.value);
					
			}
		}
		
    }


