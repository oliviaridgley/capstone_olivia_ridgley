(function() {
  'use strict';
  console.log("HEART");

  angular.module('app')
    .component('heart', {
      templateUrl: "/js/heart/heart.template.html",
      controller: controller
    });

  controller.$inject = ['$http', '$state', '$stateParams']

  function controller($http, $state, $stateParams) {
    const vm = this


  }



}())
