(function() {
  'use strict';

	angular
		.module('common.header')
		.controller('CommonHeader' , commonHeaderController);

	commonHeaderController.$inject = ['common.authService', 'FoundationApi']

	function commonHeaderController( authService , foundationApi ) {

		var vm = this;
		vm.userMenuItems = authService.getUserMenuItems();
    	vm.sidebarClosed = true;

    	foundationApi.subscribe( 'sub-nav', function( event ) {
            if (event === 'close') {
                vm.sidebarClosed = true;
            } else if (event === 'open') {
                vm.sidebarClosed = false;
            } else {
                // event === 'toggle'
                vm.sidebarClosed = !vm.sidebarClosed;
            };
        })
		}

})();
