(function() {
  'use strict';

  angular
    .module('ng-app')
    .config(routerConfig);

  function routerConfig($stateProvider, $urlRouterProvider) {
    var _dirPath = 'app/views/app/';

    $urlRouterProvider.otherwise('/');
    $urlRouterProvider.when('/', '/home');

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'app/views/base.html'
      })
      .state('home', {
        url: '/home',
        parent: 'base',
        views: {
          "nav" : {
            templateUrl: ""
          },
          "content": {
            templateUrl: _dirPath + 'pages/home/home.html',
            controller:'HomeController',
            controllerAs:'vm'
          }
        }
      })
      .state('search', {
        url: '/search/city=:city&entity=:entity&q=:q',
        parent: 'base',
        views: {
          "nav" : {
            templateUrl: ""
          },
          "content": {
            templateUrl: _dirPath + 'listing/search/search.html',
            controller: 'SearchController',
            controllerAs: 'vm'
          }
        }
      })
      .state('details', {
        url: '/details/:id',
        parent: 'base',
        views: {
          "nav" : {
            templateUrl: ""
          },
          "content": {
            templateUrl: _dirPath + 'pages/details/details.html',
            controller: 'ArticleDetailsController',
            controllerAs: 'vm'
          }
        }
      });

  }

})();
