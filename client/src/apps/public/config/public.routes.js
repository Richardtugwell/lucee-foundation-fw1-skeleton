(function() {
  'use strict';

  angular.module('public')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('root', {
            abstract: true,
            templateUrl: 'public/public.html'
        })
        .state('home', {
            url:'/',
            parent: 'root',
            views: {
                'header': {
                    templateUrl: 'components/header.html'
                },
                'topmenu': {
                    templateUrl: 'public/topmenu.html'
                },
                'content': {
                    templateUrl: 'public/modules/home/public.home.html'
                }
            }
        })
        .state('home.login', {
            url:'login',
            views: {
                'content@root': {
                    templateUrl: 'public/modules/login/public.login.html'
                }
            }
        })
        .state('home.register', {
            url:'register',
            views: {
                'content@root': {
                    templateUrl: 'public/modules/register/public.register.html'
                }
            }
        })

    }])

})();
