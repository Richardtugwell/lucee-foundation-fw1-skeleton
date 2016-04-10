(function() {
angular
	.module('public.login')
	.controller('LoginController' , loginCtrl);

	loginCtrl.$inject = ['common.authService', '$httpParamSerializer', 'FoundationApi'];

	function loginCtrl(authService, $httpParamSerializer, foundationApi  ) {

		var vm = this;
		this.loginData = {};
		this.authorised = "";

		this.submitLogin = function() {

			authService.loginUser( $httpParamSerializer(this.loginData)).then(
				function(loginResult){
					if (loginResult['AUTHORISED'] === "true") {
						foundationApi.publish('login-success', { title: 'Test', content: 'Test2' });
					} else foundationApi.publish('login-success', { title: 'Fail', content: 'Unauthorised' });
		        },
		        function(err){
		           console.error(err);
		        }
			);
		}

	};
})();
