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
                    template: '<div common-header></div>'
                },
                'topmenu': {
                    template: '<p>Add top menu if required</p>'
                },
                'content': {
                    template: '<p>Add content</p>'
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
