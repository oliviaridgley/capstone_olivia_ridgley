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
    console.log($stateParams.createId);

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
          console.log(vm.cards)
          return vm.cards;
        });
    }

    function newCard() {
      //this is my post request to cards
      vm.card.deck_id = parseInt($stateParams.createId);
      console.log(vm.card)
      if (vm.cards.length >= 36) {
        console.log("Reached max number of questions, please click 'submit all' to see your new deck!")
      } else {
        $http.post('/cards', vm.card)
          .then(function(response) {
            vm.cards.unshift(vm.card);
            delete vm.card;
            console.log('all cards ', vm.cards.length);
          });
      }
    }

    function submitAll() {
      $state.go('playDeck', { playId: $stateParams.createId })
    }








  }

}());
