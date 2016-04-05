(function() {
  'use strict';

  angular.module('public')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('root', {
            abstract: true,
            templateUrl: 'components/root.html'
        })
        .state('home', {
            url:'/',
            parent: 'root',
            views: {
                'header': {
                    templateUrl: 'components/header.html'
                },
                'content': {
                    templateUrl: 'components/content.html'
                }
            }
        })
        .state('home.login', {
            url:'login',
            views: {
                'content@root': {
                    templateUrl: 'components/login.html'
                }
            }
        })
        .state('home.register', {
            url:'register',
            views: {
                'content@root': {
                    templateUrl: 'components/register.html'
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
