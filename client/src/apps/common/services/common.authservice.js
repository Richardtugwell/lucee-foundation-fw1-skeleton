(function() {
  'use strict';

	angular
		.module('common')
		.factory('common.authService' , authService)

	  function authService() {

	    var service    = {};

	    service.getAuthMenuItems = getAuthMenuItems;

	    return service;

	    function getAuthMenuItems() {

			return ['Dashboard', 'Public'];
	    }

	  }

})();
