angular
	.module('public.login')
	.controller('LoginController' , loginCtrl);

loginCtrl.$inject = ['$scope' , 'FoundationApi', 'common.authService', '$httpParamSerializer'];

function loginCtrl($scope , foundationApi, authService, $httpParamSerializer  ) {

	$scope.sidebarClosed = true;
	$scope.loginData = {};
	$scope.authorised = "";

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

		authService.loginUser( $httpParamSerializer($scope.loginData)).then(
			function(loginResult){
				if (loginResult['AUTHORISED'] === "true") {
	           	$scope.authorised = "true";
				}
	        },
	        function(err){
	           console.error(err);
	        }
		);
	}

};
