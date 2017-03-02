(function() {
  'use strict';
  console.log("PLAY");

  angular.module('app')
    .component('playDeck', {
      templateUrl: "/js/play-deck/play-deck.template.html",
      controller: controller
    });

  controller.$inject = ['$http', '$state', '$stateParams']

  function controller($http, $state, $stateParams) {
    const vm = this


  }



}())
