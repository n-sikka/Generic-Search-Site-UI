(function(){
	'use strict';

	angular
		.module('ng-app')
		.directive('searchTypeahead',directive);

		function directive(){
			var directive = {
				restrict: 'EA',
				templateUrl: 'app/views/app/partials/search-bar/typeahead.html',
				scope: {
					data: '=',
					query: '='
				}
			}

			return directive;

    }

})();
