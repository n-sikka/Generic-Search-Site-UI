(function(){
	'use strict';

	angular
		.module('ng-app')
		.directive('searchItem', item);

		function item(){
			var directive = {
				restrict: 'E',
				templateUrl: 'app/views/app/partials/cards/search/search-item.html',
        scope: {
					data: '='
				},
				link: linkFunction
			};

      function linkFunction(scope) {
      }

      return directive;


		}
})();
