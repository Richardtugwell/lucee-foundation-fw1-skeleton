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
        .state('login', {
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
                    template: '<fm-login-form class="grid-block" />'
                }
            }
        })
        .state('login.register', {
            url:'register',
            views: {
                'content@root': {
                    template: '<fm-register-form class="grid-block" />'
                }
            }
        })
        .state('login.resetpassword', {
            url:'resetpassword',
            views: {
                'content@root': {
                    template: '<fm-resetpwd-form class="grid-block" />'
                }
            }
        })

    }])

})();
