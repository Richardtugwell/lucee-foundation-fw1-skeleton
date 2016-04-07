(function() {
  'use strict';

  angular.module('dashboard')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('root', {
            abstract: true,
            templateUrl: 'dashboard/dashboard.html'
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
                    templateUrl: 'public/modules/home/dashboard.html'
                }
            }
        })
        .state('home.login', {
            url:'login',
            views: {
                'content@root': {
                    templateUrl: 'public/modules/login/login.html'
                }
            }
        })
        .state('home.register', {
            url:'register',
            views: {
                'content@root': {
                    templateUrl: 'public/modules/register/register.html'
                }
            }
        })

    }])

})();
