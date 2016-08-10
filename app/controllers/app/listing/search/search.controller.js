(function(){


  angular
  .module('ng-app')
  .controller('SearchController' , controller);

  function controller($stateParams, SearchService, $state, $rootScope){
    var vm = this;

    vm.query = $stateParams;

    $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams){
      $rootScope.prevState = fromParams;
    })

    vm.query_keys = [];

    var queryStrings = vm.query.q.split(',');

    queryStrings.forEach(function(q){
      vm.query_keys.push(q);
    })

    vm.addQuery = function(newKey){
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

    vm.removeQuery = function(id) {
      // console.log(id);
      if(vm.query_keys.length === 0) {
        vm.query_keys = [" "]
      } else {
        vm.query_keys.splice(id, 1);
        var queryKey = vm.query_keys.join();
        console.log(queryKey);
        $state.go('search', {city: vm.query.city, entity: vm.query.entity, q: queryKey.toString()})
      }
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


    //to get the query tags from stateparams and populate filter box
    function getTags(){
      var tags = [];
      vm.query_keys.forEach(function(tag){
        var obj = { tag : tag }
        tags.push(obj)
      })
      return tags;
    }

    var tags = getTags();

    //filterbox chips functionality
    $('.chips-initial').material_chip({
      data: tags,
    });

    $('.chips').on('chip.delete', function(e, chip){
      var id = vm.query_keys.indexOf(chip.tag);
      console.log(id);
      vm.removeQuery(id);
    });


    $('.chips').on('chip.add', function(e, chip){
      vm.addQuery(chip.tag);
    });


  }


})();
