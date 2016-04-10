(function() {
  'use strict';

	angular
		.module('public.login')
		.directive('fmLoginForm' , loginFormDirective)

	  function loginFormDirective() {
	    var directive = {
	      restrict: 'E',
	      templateUrl: 'public/modules/login/public.login.html',
	      controller: 'LoginController',
	      controllerAs: 'vm',
	      bindToController: true
	    };

	    return directive;

	  }

})();
