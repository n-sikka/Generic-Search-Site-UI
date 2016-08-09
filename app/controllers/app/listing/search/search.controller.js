(function(){


  angular
  .module('ng-app')
  .controller('SearchController' , controller);

  function controller($stateParams, SearchService, $state, $rootScope){
    var vm = this;

    vm.query = $stateParams;

    vm.query_keys = [];
    // vm.query_keys.push(vm.query.city, vm.query.entity )

    var queryStrings = vm.query.q.split(',');

    queryStrings.forEach(function(q){
      vm.query_keys.push(q);
    })

    vm.addQuery = function(newKey, event){
      if (event.keyCode == 13) {
        if(vm.query_keys.indexOf(newKey) === -1){
          vm.query_keys.push(newKey)
          var queryKey = [];
          queryKey.push(vm.query.q, newKey)
          $state.go('search', {city: vm.query.city, entity: vm.query.entity, q: queryKey})
        } else {
          var queryKey = [];
          queryKey.push(vm.query.q)
          $state.reload();
        }

      }
    }

    vm.removeQuery = function(id) {
      vm.query_keys.splice(id, 1);
      var queryKey = vm.query_keys.join();
      console.log(queryKey);
      $state.go('search', {city: vm.query.city, entity: vm.query.entity, q: queryKey.toString()})
    }

    vm.search = function() {

      var query = {
        "_query" : vm.query.q,
        "_area" : vm.query.city,
        "_topics" : vm.query.entities
      }

      SearchService.get(query).then(function(result){
        vm.dataSet = result;
      })

    }


    $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams){
        $rootScope.prevState = fromParams;
    })

  }


})();
