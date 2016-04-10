angular
	.module('public.login')
	.controller('LoginController' , loginCtrl);

loginCtrl.$inject = ['$scope' , 'FoundationApi', 'common.authService'];

function loginCtrl($scope , foundationApi, authService  ) {

	$scope.sidebarClosed = true;
	$scope.user = "";
	$scope.password = "";

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

		authService.loginUser($scope.user, $scope.password).then(
			function(loginResult){
	           console.log($scope.user);
	        },
	        function(err){
	           console.error(err);
	        }
		);
	}

};
