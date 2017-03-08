(function() {
  'use strict';
  console.log("CREATE-CARDS");

  angular.module('app')
    .component('createCards', {
      controller: controller,
      templateUrl: "/js/create-cards/create-cards.template.html"
    });

  controller.$inject = ['$http', '$state', '$stateParams']

  function controller($http, $state, $stateParams) {
    const vm = this;
    vm.$onInit = onInit;
    vm.newCard = newCard;
    vm.cards = [];
    vm.submitAll = submitAll;


    function onInit() {
      $http.get('/cards')
        .then(function(response) {
          const routeCards = response.data.filter((deck) => {
            if (deck.deck_id === parseInt($stateParams.createId)) {
              return true;
            }
          });
          for (var i = 0; i < routeCards.length; i++) {
            vm.cards.unshift(routeCards[i]);
          }
          return vm.cards;
        });
    }

    function newCard() {
      //this is my post request to cards
      vm.card.deck_id = parseInt($stateParams.createId);
      if (vm.cards.length >= 36) {} else {
        $http.post('/cards', vm.card)
          .then(function(response) {
            vm.cards.unshift(vm.card);
            delete vm.card;
          });
      }
    }

    function submitAll() {
      $state.go('playDeck', { playId: $stateParams.createId })
    }



  }

}());
