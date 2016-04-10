(function() {
  'use strict';

	angular
		.module('common')
		.factory('common.authService' , authService)

	authService.inject = ['$resource'];


    function authService($resource) {

    var service    = {};
	var menu = $resource('/index.cfm/public/getMenu');
    var authenticate = $resource('/index.cfm/public/authenticate', {}, {
        auth: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    });
    service.getUserMenuItems = getUserMenuItems;
    service.loginUser = loginUser;

    return service;

    function getUserMenuItems() {

		return menu.query();
    }

    function loginUser( data ) {

        //console.log(arguments);
        return authenticate.auth({} , data ).$promise;
    }

  }

})();
