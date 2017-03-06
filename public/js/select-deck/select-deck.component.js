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

    const vm = this;
    vm.$onInit = onInit;
    vm.decks = [];
    vm.heartDeck = heartDeck;

    function onInit() {
      $http.get('/decks').then(function(response) {
        // console.log(response.data);
        vm.decks = response.data;
      });
    }

    function heartDeck(deck) {
      sessionStorage.setItem('hearted', deck.id);
    }


  }



}())
