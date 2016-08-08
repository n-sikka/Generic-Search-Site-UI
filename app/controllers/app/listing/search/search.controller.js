(function(){


  angular
  .module('ng-app')
  .controller('SearchController' , controller);

  function controller($stateParams){
    var vm = this;

    // console.log($stateParams);

    vm.query = $stateParams;

    vm.dataSet = {
      "title" : "dataset1",
      "id" : 1,
      "key" : "healthcare, population",
      "services" : [
        {
          "service" : "pdf",
          "available": true
          // "icon" : "fa-file-pdf-o"
        },
        {
          "service" : "csv",
          "available": true
          // "icon" : "fa-table"
        },
        {
          "service" : "json",
          "available": false
          // "icon" : "fa-file-text-o"
        },
        {
          "service" : "maps",
          "available": false
          // "icon" : "fa-map-o"
        },
        {
          "service" : "charts",
          "available": true
          // "icon" : "fa-bar-chart"
        }
      ]
    }

  }


})();
