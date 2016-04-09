(function() {
  'use strict';

	angular
		.module('common')
		.factory('common.authService' , authService)

	authService.inject = ['$resource'];


    function authService($resource) {

    var service    = {};
	var menu = $resource('/index.cfm/public/getMenu');
	var authenticate = $resource('/index.cfm/public/authenticate');

    service.getUserMenuItems = getUserMenuItems;
    service.loginUser = loginUser;

    return service;

    function getUserMenuItems() {

		return menu.query();
    }

    function loginUser( user, password ) {

        return authenticate.save({}, { user: user, password: password}).$promise;
    }

  }

})();
