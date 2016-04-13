(function() {
	angular
		.module('todos.list', [])
		.controller('TodoController' , todoCtrl);

	todoCtrl.$inject = ['$scope' , '$http' , '$httpParamSerializer', 'todos.todoService'];

	function todoCtrl($scope , $http , $httpParamSerializer , todoService  ) {

		var vm = this;

		vm.todos = todoService.getTodos();

		vm.saveTodo = function( idx ) {
			var todo = vm.todos[idx];
			$http({
				method: 'POST',
				url: '/todo',
				data: $httpParamSerializer(todo),
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				} // set the headers so angular passing info as form data (not request payload)
			}).success(function(data){

				vm.todos[idx] = data;

			});

		};

		vm.deleteTodo = function( idx ) {

			var todo = vm.todos[idx];

			$http.delete('/todo/' + todo.id).success(function(data){

					vm.todos.splice( idx , 1 );

					});


			};


		$scope.newTodo = function() {

			vm.todos.push( { "status":"new" }  );

		};


		$scope.reset = function( idx ) {

			var todo = vm.todos[idx];

			$http.get('/todo/' + todo.id).success( function( data ) { vm.todos[idx] = data } );

		}

	};

})();
