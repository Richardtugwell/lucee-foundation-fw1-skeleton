angular
	.module('public.login')
	.controller('LoginController' , loginCtrl);

	loginCtrl.$inject = ['common.authService', '$httpParamSerializer'];

	function loginCtrl(authService, $httpParamSerializer  ) {

		var vm = this;
		this.loginData = {};
		this.authorised = "";

		this.submitLogin = function() {

			authService.loginUser( $httpParamSerializer(this.loginData)).then(
				function(loginResult){
					if (loginResult['AUTHORISED'] === "true") {
		           		this.authorised = "true";
					}
		        },
		        function(err){
		           console.error(err);
		        }
			);
		}

	};
