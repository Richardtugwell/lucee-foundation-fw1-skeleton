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
                    template: '<fm-common-header />'
                },
                'sidebar': {
                    template: '<fm-dashboard-sidebar />'
                },
                'content': {
                    template: '<p>Add content</p>'
                }
            }
        })

    }])

})();
