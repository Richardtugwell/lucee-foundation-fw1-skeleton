(function() {
  'use strict';

	angular
		.module('common.header')
		.controller('CommonHeader' , commonHeaderController);

		commonHeaderController.$inject = ['common.authService']

		function commonHeaderController(authService) {
			var vm = this;
			vm.userMenuItems = authService.getUserMenuItems();
		}

})();
