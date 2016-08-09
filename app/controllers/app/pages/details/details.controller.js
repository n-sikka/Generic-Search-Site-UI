(function(){


  angular
  .module('ng-app')
  .controller('ArticleDetailsController' , controller);

  function controller($stateParams, DetailService, $state, $rootScope){
    var vm = this;

    vm.getData = function() {
      DetailService.get($stateParams).then(function(result){
        vm.details = result;
      })
    }



    //to facilitate back feature
    if($rootScope.prevState){
      vm.params = {
        city: $rootScope.prevState.city,
        entity: $rootScope.prevState.entity,
        q: $rootScope.prevState.q
      }
    } else {
      vm.params = {
        city: 'India',
        entity: 'Education',
        q: 'Education'
      }
    }



  }


})();
