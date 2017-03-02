(function() {
  'use strict';
  console.log("CREATE-DECK");

  angular.module('app')
    .component('createDeck', {
      templateUrl: "/js/create-deck/create-deck.template.html",
      controller: controller
    });

  controller.$inject = ['$http', '$state', '$stateParams']

  function controller($http, $state, $stateParams) {
    const vm = this


  }



}())
