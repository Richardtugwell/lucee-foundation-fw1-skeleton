component accessors = true {

	property framework;

	public void function logout() {

		structClear(session);

		framework.redirect( action = "public.app" );

	}

}
