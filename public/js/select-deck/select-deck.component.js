(function() {
  'use strict';
  console.log("SELECT");

  angular.module('app')
    .component('selectDeck', {
      templateUrl: "/js/select-deck/select-deck.template.html",
      controller: controller
    });

  controller.$inject = ['$http', '$state', '$stateParams']

  function controller($http, $state, $stateParams) {
    const vm = this


  }



}())
