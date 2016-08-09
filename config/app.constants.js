(function(){
  'use strict';

  angular
    .module('ng-app')
    .constant('API', {
        CITIES : "assets/data/cities.json",
        SEARCH : 'assets/data/search-list.json',
        GET_DETAIL : 'assets/data/search-list-details.json'
    })

})()
