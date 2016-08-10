(function(){
	'use strict';

	angular
		.module('ng-app')
		.directive('searchBar',directive);

		function directive($rootScope){
			var directive = {
				restrict: 'EA',
				templateUrl: 'app/views/app/partials/search-bar/search-bar.html',
				controller: 'SearchBarController',
				controllerAs: 'vm',
				scope: {
					key: '=',
					groups: '='
				},
				link: linkFunction

			}
			return directive;

			function linkFunction(scope) {


			}

		}


})();
