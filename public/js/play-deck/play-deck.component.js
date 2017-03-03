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
    vm.$onInit = onInit;
    vm.cards = [];

    function onInit() {
      $http.get(`/decks/${$stateParams.playId}`)
        .then(function(response) {
          vm.deck = response.data;
          // console.log(vm.deck);
        });

      $http.get('/cards')
        .then(function(response) {
          const routeCard = response.data.filter((deck) => {
            if (deck.deck_id === parseInt($stateParams.playId)) return true;
          });

          vm.cards.push(routeCard);
        });
    }
    console.log(vm.cards)
  }






}())
