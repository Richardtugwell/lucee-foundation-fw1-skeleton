(function() {
  'use strict';

	angular
		.module('common.header')
		.directive('commonHeader' , commonHeaderDirective)

	  function commonHeaderDirective() {
	    var directive = {
	    	scope: {
	    		menu: '@'
	    	},
	      restrict: 'AE',
	      templateUrl: 'common/modules/header/common.header.html',
	      controller: 'CommonHeader',
	      controllerAs: 'vm',
	      bindToController: true
	    };

	    return directive;

	  }

})();
