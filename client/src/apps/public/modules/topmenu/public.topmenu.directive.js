(function() {
  'use strict';

	angular
		.module('public.topmenu')
		.directive('fmTopmenu' , topMenuDirective)

	  function topMenuDirective() {
	    var directive = {
	    	scope: {
	    	},
	      restrict: 'E',
	      templateUrl: 'public/modules/topmenu/public.topmenu.html'
	    };

	    return directive;

	  }

})();
