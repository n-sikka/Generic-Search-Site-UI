(function(){
  'use strict';

  angular
    .module('ng-app')
    .service('SearchService', searchService)

    function searchService(API, $http, $q){

      var service = this;

      service.get = function(query){
          // console.log('query will be used when getting from an actual api.');

          var deferred = $q.defer();

          $http.get(API.SEARCH)
            .then(function success(response){
              deferred.resolve(response.data);
            }, function error(response){
              console.log(response);
            })

          return deferred.promise;
      }


      service.getArticle = function(id){

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
