(function() {
  'use strict';

  angular.module('todos')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('root', {
            abstract: true,
            templateUrl: 'todos/todos.html'
        })
        .state('todo', {
            url:'/',
            parent: 'root',
            views: {
                'header': {
                    template: '<fm-common-header />'
                },
                'topmenu': {
                    template: '<p>top menu</p>'
                },
                'content': {
                    template: '<fm-todo-list />'
                }
            }
        })

    }])

})();
