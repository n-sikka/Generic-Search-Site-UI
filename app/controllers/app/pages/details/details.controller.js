(function(){


  angular
  .module('ng-app')
  .controller('ArticleDetailsController' , controller);

  function controller($stateParams, DetailService){
    var vm = this;

    vm.getData = function() {
      DetailService.get($stateParams).then(function(result){
        console.log(result);
        vm.details = result;
      })
    }

  }


})();
