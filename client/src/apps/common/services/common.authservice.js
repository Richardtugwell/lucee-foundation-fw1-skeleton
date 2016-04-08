(function() {
  'use strict';

	angular
		.module('common')
		.factory('common.authService' , authService)

	  function authService() {

	    var service    = {};

	    service.getUserMenuItems = getUserMenuItems;

	    return service;

	    function getUserMenuItems() {

			return ['Dashboard', 'Public'];
	    }

	  }

})();
