(function() {
  'use strict';

  angular.module('dashboard')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url:'/',
            views: {
                'header': {
                    templateUrl: 'components/header.html'
                },
                'content': {
                    templateUrl: 'components/content.html'
                }
            }
        })

    }])
    .run(run)
  ;

  function run() {
    FastClick.attach(document.body);
  }

})();
