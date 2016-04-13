(function() {
  'use strict';

	angular
		.module('todos.list')
		.directive('fmTodoList' , todoListDirective)

	  function todoListDirective() {
	    var directive = {
		scope: {
		},
	      restrict: 'E',
	      templateUrl: 'todos/modules/list/todos.list.html',
	      controller: 'TodoController',
	      controllerAs: 'vm',
	      bindToController: true
	    };

	    return directive;

	  }

})();
