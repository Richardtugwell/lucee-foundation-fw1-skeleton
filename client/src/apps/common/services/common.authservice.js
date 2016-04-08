(function() {
  'use strict';

	angular
		.module('common')
		.factory('common.authService' , authService)

		authService.inject = ['$resource'];

	  function authService($resource) {

	    var service    = {};
		var menu = $resource('/index.cfm/public/getMenu');

	    service.getUserMenuItems = getUserMenuItems;

	    return service;

	    function getUserMenuItems() {

			return menu.query();
	    }

	  }

})();
