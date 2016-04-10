(function() {
  'use strict';

	angular
		.module('public.register')
		.directive('fmRegisterForm' , registerFormDirective)

	  function registerFormDirective() {
	    var directive = {
		scope: {
		},
	      restrict: 'E',
	      templateUrl: 'public/modules/register/public.register.html',
	      controller: 'RegisterController',
	      controllerAs: 'vm',
	      bindToController: true
	    };

	    return directive;

	  }

})();
