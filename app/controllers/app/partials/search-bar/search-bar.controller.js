(function(){
	'use strict';

	angular
	.module('ng-app')
	.controller('SearchBarController', controller);


	function controller($log, $http, API) {

		var vm = this;

		vm.getCities = function(){
			$http.get(API.CITIES).then(function success(response){
				vm.cities = response.data
			}, function success(response){
				console.log(response.statusText);
			})
		}
	}

})();
