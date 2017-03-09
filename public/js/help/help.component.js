(function() {
  'use strict';
  console.log("HELP");

  angular.module('app')
    .component('help', {
      templateUrl: "/js/help/help.template.html",
      controller: controller
    });

  controller.$inject = ['$http', '$state', '$stateParams']

  function controller($http, $state, $stateParams) {
    const vm = this


  }



}())
