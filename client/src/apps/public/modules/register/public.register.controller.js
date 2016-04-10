(function() {
angular
	.module('public.register')
	.controller('RegisterController' , registerCtrl);

	registerCtrl.$inject = ['common.authService', '$httpParamSerializer'];

	function registerCtrl(authService, $httpParamSerializer  ) {

		var vm = this;
		this.registerData = {};

		this.submitLogin = function() {

			authService.registerUser( $httpParamSerializer(this.registerData)).then(
				function(registerResult){
		        },
		        function(err){
		        }
			);
		}

	};
})();
