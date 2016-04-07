(function() {
  'use strict';

	angular
		.module('common.header')
		.controller('CommonHeader' , commonHeaderController);

	  function commonHeaderController() {
	  	var vm = this;
	  	vm.menu = ['dashboard', 'public'];


	  }

})();
