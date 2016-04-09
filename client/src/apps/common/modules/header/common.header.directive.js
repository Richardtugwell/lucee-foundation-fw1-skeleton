(function() {
  'use strict';

	angular
		.module('common.header')
		.directive('fmCommonHeader' , commonHeaderDirective)

	  function commonHeaderDirective() {
	    var directive = {
	    	scope: {
	    		userMenuItems: '@'
	    	},
	      restrict: 'E',
	      templateUrl: 'common/modules/header/common.header.html',
	      controller: 'CommonHeader',
	      controllerAs: 'vm',
	      bindToController: true
	    };

	    return directive;

	  }

})();
