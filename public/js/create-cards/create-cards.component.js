(function() {
  'use strict';
  console.log("CREATE-CARDS");

  angular.module('app')
    .component('createCards', {
      controller: controller,
      templateUrl: "/js/create-cards/create-cards.template.html"
    });

  controller.$inject = ['$http', '$state']

  function controller($http, $state) {
    const vm = this;


  }

}())
