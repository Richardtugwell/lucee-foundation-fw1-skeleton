angular
	.module('public.login')
	.controller('LoginController' , loginCtrl);

loginCtrl.$inject = ['$scope' , '$state', '$http' , '$httpParamSerializer', 'FoundationApi'];

function loginCtrl($scope , $state, $http , $httpParamSerializer, foundationApi  ) {

	$scope.sidebarClosed = true;

	foundationApi.subscribe('sub-nav', function(event) {
        if (event === 'close') {
            $scope.sidebarClosed = true;
        } else if (event === 'open') {
            $scope.sidebarClosed = false;
        } else {
            // event === 'toggle'
            $scope.sidebarClosed = !$scope.sidebarClosed;
        };
    })

	$scope.submitLogin = function() {
		window.location.assign("/index.cfm/dashboard/app");
	}

};
