(function() {
  'use strict';

	angular
        .module('dashboard.sidebar')
		.directive('fmDashboardSidebar' , sidebarDirective)

	  function sidebarDirective() {
	    var directive = {
		scope: {
		},
	      restrict: 'E',
	      templateUrl: 'dashboard/modules/sidebar/dashboard.sidebar.html',
	      controller: 'SidebarController',
	      controllerAs: 'vm',
	      bindToController: true
	    };

	    return directive;

	  }

})();
