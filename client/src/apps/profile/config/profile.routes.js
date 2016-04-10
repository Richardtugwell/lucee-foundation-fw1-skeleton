(function() {
  'use strict';

  angular.module('profile')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('root', {
            abstract: true,
            templateUrl: 'profile/profile.html'
        })
        .state('dashboard', {
            url:'/',
            parent: 'root',
            views: {
                'header': {
                    template: '<fm-common-header />'
                },
                'topmenu': {
                    template: '<p>Add a top menu if required</p>'
                },
                'content': {
                    template: '<p>Add content</p>'
                }
            }
        })

    }])

})();
