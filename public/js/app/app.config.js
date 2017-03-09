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
        name: 'landing',
        parent: 'app',
        url: '/',
        component: 'landing',
      })
      .state({
        name: 'home',
        parent: 'app',
        url: '/home',
        component: 'home',
      })
      .state({
        name: 'selectDeck',
        parent: 'app',
        url: '/select-deck',
        component: 'selectDeck',
      })
      .state({
        name: 'playDeck',
        parent: 'app',
        url: '/play-deck/:playId',
        component: 'playDeck',
      })
      .state({
        name: 'createDeck',
        parent: 'app',
        url: '/create-deck',
        component: 'createDeck',
      })
      .state({
        name: 'createCards',
        parent: 'app',
        url: '/create-cards/:createId',
        component: 'createCards',
      })
      .state({
        name: 'heart',
        parent: 'app',
        url: '/heart',
        component: 'heart',
      })
      .state({
        name: 'help',
        parent: 'app',
        url: '/help',
        component: 'help',
      });
  }
}());
