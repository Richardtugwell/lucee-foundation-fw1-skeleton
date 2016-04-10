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
                    template: '<fm-common-header />'
                },
                'topmenu': {
                    template: '<fm-topmenu />'
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
                    template: '<fm-login-form class="grid-block" />'
                }
            }
        })
        .state('home.register', {
            url:'register',
            views: {
                'content@root': {
                    template: '<fm-register-form class="grid-block" />'
                }
            }
        })

    }])

})();
