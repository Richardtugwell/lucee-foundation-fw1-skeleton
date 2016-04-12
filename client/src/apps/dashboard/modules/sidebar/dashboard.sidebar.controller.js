(function() {
angular
	.module('dashboard.sidebar')
	.controller('SidebarController' , sidebarCtrl);

	sidebarCtrl.$inject = ['common.authService'];

	function sidebarCtrl(authService) {

		var vm = this;
		vm.userMenuItems = authService.getUserMenuItems();

	};
})();
