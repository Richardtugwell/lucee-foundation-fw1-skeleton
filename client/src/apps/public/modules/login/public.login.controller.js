(function() {
angular
	.module('public.login')
	.controller('LoginController' , loginCtrl);

	loginCtrl.$inject = ['common.authService', '$httpParamSerializer', 'FoundationApi'];

	function loginCtrl(authService, $httpParamSerializer, foundationApi  ) {

		var vm = this;
		vm.loginData = {};
		vm.authorised = "";

		vm.submitLogin = function() {

			authService.loginUser( $httpParamSerializer(vm.loginData)).then(
				function(loginResult){
					if (loginResult['AUTHORISED'] === "true") {
						window.location.assign('/index.cfm/dashboard');
					} else foundationApi.publish(
						'login-fail', {
							autoclose: 3000,
							color: 'warning',
							title: 'Login failed',
							content: 'Unknown userid/password'
						}
					);
		        },
		        function(err){
		           console.error(err);
		        }
			);
		}

	};
})();
