(function(){


  angular
  .module('ng-app')
  .controller('HomeController' , controller);

  function controller(){
    var vm = this;

    vm.identifiers = [
      {
        "title" : "HEALTHCARE",
        "icon" : 'fa-heartbeat'
      },
      {
        "title" : "ENVIRONMENT",
        "icon" : 'fa-envira'
      },
      {
        "title" : "POLLUTION",
        "icon" : 'fa-trash'
      },
      {
        "title" : "INSURANCE",
        "icon" : 'fa-book'
      },
      {
        "title" : "MEDIA",
        "icon" : 'fa-television'
      },
      {
        "title" : "SPORTS",
        "icon" : 'fa-futbol-o'
      },
      {
        "title" : "TRANSPORT",
        "icon" : 'fa-car'
      },
      {
        "title" : "TOURISM",
        "icon" : 'fa-plane'
      }
    ];

  }


})();
