component accessors = true {

	property framework;
	property authenticationservice;

	public void function getMenu() {

		var menu = ['Public', 'Dashboard', 'Admin'];

		framework.renderdata("JSON" , menu);

	}

	public void function authenticate( rc ) {
		param name="rc.user" default="anonymous";
		param name="rc.password" default="anonymous";
		var result = authenticationservice.authenticate( user = rc.user , password = rc.password);
		if (result.authorised) {
			session['iduser'] = result.iduser;
			session['permissions'] = result.permissions;
			framework.renderdata("JSON" , {authorised:"true"});
		}
		else {
			framework.renderdata("JSON" , {authorised:"false"});
		}
	}
}
