(function() {
  'use strict'

  console.log("CONFIG");

  angular.module('app')
    .config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'app',
        abstract: true,
        component: 'app',
      })
      .state({
        name: 'splash',
        parent: 'app',
        url: '/',
        component: 'splash',
      })
      .state({
        name: 'home',
        parent: 'app',
        url: '/home',
        component: 'home',
      })
      .state({
        name: 'select-deck',
        parent: 'app',
        url: '/select-deck',
        component: 'selectDeck',
      })
  }
}());
