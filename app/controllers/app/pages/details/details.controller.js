(function(){


  angular
  .module('ng-app')
  .controller('ArticleDetailsController' , controller);

  function controller($stateParams){
    var vm = this;

    vm.id = $stateParams;

    //fetch details here
  }


})();
