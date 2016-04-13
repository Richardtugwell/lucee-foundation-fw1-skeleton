(function() {
angular
	.module('todos.list')
	.controller('ListController' , listCtrl);

	listCtrl.$inject = ['common.authService', '$httpParamSerializer', 'FoundationApi'];

	function listCtrl(authService, $httpParamSerializer, foundationApi  ) {

		var vm = this;

	};
	
})();
