(function() {
  'use strict';
  console.log("LANDING");

  angular.module('app')
    .component('landing', {
      templateUrl: "/js/landing/landing.template.html",
      controller: controller
    });

  controller.$inject = ['$http', '$state', '$stateParams']

  function controller($http, $state, $stateParams) {
    const vm = this


  }



}())
