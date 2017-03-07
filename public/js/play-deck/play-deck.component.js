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
    vm.cards = []
    vm.nextCard = nextCard;
    vm.backCard = backCard;

    vm.currentIndex = 0;

    function onInit() {
      $http.get(`/decks/${$stateParams.playId}`)
        .then(function(response) {
          vm.deck = response.data;
        });

      $http.get('/cards')
        .then(function(response) {
          const filteredCardsArr = response.data.filter((deck) => {
            if (deck.deck_id === parseInt($stateParams.playId)) {
              return true;
            }
          });
          vm.cards.push(filteredCardsArr);
          vm.currentCard = vm.cards[0][0].question;
          return vm.cards;
        });
    }

    function nextCard() {
      vm.currentIndex += 1;
      vm.currentCard = vm.cards[0][vm.currentIndex].question;
    }

    function backCard() {
      vm.currentIndex -= 1;
      vm.currentCard = vm.cards[0][vm.currentIndex].question;

    }
  }




}())
