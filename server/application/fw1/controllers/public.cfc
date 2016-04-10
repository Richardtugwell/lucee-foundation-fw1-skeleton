component accessors = true {

	property framework;
	property authenticationservice;
	property menuservice;
	property sessionservice;

	public void function app() {

		if (sessionservice.isLoggedIn() ) {
			framework.redirect( action = "dashboard.app" );
		}

	}

	public void function getMenu() {

		var menu = menuservice.getMenu();

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
