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
    const vm = this;
    vm.$onInit = onInit;
    vm.decks = []
    vm.clearHearted = clearHearted;

    function onInit() {
      vm.parsed = (JSON.parse(sessionStorage.hearted)).data
      console.log(vm.parsed)

      $http.get('/decks')
        .then(function(response) {
          const filteredDecksArr = response.data.filter((deck) => {
            // console.log(deck.id);
            if (vm.parsed.includes(deck.id)) {
              return true;
            }
          });
          vm.decks = filteredDecksArr;
          return vm.decks;
        });
      console.log(vm.decks);


    }

    function clearHearted() {
      sessionStorage.clear();
      $state.reload();
    }


  }



}())
