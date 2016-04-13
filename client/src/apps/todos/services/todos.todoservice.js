(function() {
  'use strict';

	angular
		.module('todos')
		.factory('todos.todoService' , ['$resource', todoService] )

    function todoService($resource) {

    var service    = {};
	  var todos = $resource('/index.cfm/todos/list');

    service.getTodos = getTodos;

    return service;

    function getTodos() {

		    return todos.query();
    }


  }

})();
