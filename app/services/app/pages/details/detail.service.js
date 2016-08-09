(function(){
  'use strict';

  angular
    .module('ng-app')
    .service('DetailService', detailService)

    function detailService(API, $http, $q){

      var service = this;

      service.get = function(query){
          // console.log('query will be used when getting from an actual api.');

          var deferred = $q.defer();

          $http.get(API.GET_DETAIL)
            .then(function success(response){
              deferred.resolve(response.data);
            }, function error(response){
              console.log(response);
            })

          return deferred.promise;
      }

      return service;


    }

})();
