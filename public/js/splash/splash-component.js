(function() {
  'use strict';
  console.log("SPLASH");

  angular.module('app')
    .component('splash', {
      templateUrl: "/js/splash/splash.template.html",
      controller: controller
    });

  controller.$inject = ['$http', '$state', '$stateParams']

  function controller($http, $state, $stateParams) {
    const vm = this


  }



}())
