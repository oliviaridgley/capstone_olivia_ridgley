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

    vm.newDeck = newDeck;
    vm.getQueryName = getQueryName;
    vm.testFunction = testFunction;

    function testFunction(event) {
      vm.selectedImg = event.target.src;
    }

    function getQueryName(artist) {
      console.log(vm.userQuery)
      // return $http.get(`$https://www.rijksmuseum.nl/api/en/collection/sk-c-5?key=trtXuldK&format=json&maker=${artist}`).then((results) => {
      //   vm.results = results;
      // })
      $http.get(`https://www.rijksmuseum.nl/api/en/collection?q=${vm.userQuery}&imgonly=true&key=trtXuldK&format=json`).then((results) => {
        vm.results = results.data;
        console.log(vm.results);
      })
    }

    function newDeck() {

    }


  }



}())
