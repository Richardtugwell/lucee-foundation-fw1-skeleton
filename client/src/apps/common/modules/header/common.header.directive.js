(function() {
  'use strict';

	angular
		.module('common.header')
		.directive('commonHeader' , commonHeaderDirective);

	  function commonHeaderDirective() {
	    var directive = {
	      restrict: 'AE',
	      templateUrl: 'common/modules/header/common.header.html'
	    };

	    return directive;

	  }

	})();
