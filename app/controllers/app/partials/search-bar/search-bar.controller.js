(function(){
	'use strict';

	angular
	.module('ng-app')
	.controller('SearchBarController', controller);


	function controller($log, $http, $state, API) {

		var vm = this;

		vm.getCities = function(){
			$http.get(API.CITIES).then(function success(response){
				vm.cities = response.data
			}, function success(response){
				console.log(response.statusText);
			})
		}

		vm.makeSearch = function(str, event){
			if(event.keyCode === 13){
				$state.go('search', {
					city: 'all',
					entity: 'all',
					q: str
				})
			}
		}
	}

})();
