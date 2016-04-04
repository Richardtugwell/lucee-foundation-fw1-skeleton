(function() {
  'use strict';

  angular.module('public')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url:'/',
            views: {
                'content': {
                    templateUrl: 'components/content.html'
                }
            }
        })
        .state('home.login', {
            url:'login',
            views: {
                'content@': {
                    templateUrl: 'components/login.html'
                }
            }
        })
        .state('home.register', {
            url:'register',
            views: {
                'content@': {
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
