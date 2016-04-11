(function() {
  'use strict';

	angular
		.module('public.resetpassword')
		.directive('fmResetpasswordForm' , resetPasswordFormDirective)

	  function resetPasswordFormDirective() {
	    var directive = {
		scope: {
		},
	      restrict: 'E',
	      templateUrl: 'public/modules/resetpassword/public.resetpassword.html'
	    };

	    return directive;

	  }

})();
