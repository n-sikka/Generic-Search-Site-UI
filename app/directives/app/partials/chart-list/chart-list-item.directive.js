(function(){
	'use strict';

	angular
		.module('ng-app')
		.directive('chartListItem', item);

		function item(){
			var directive = {
				restrict: 'E',
				templateUrl: 'app/views/app/partials/chart-list/chart-list-item.html',
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
