component accessors="true" {

	property sessionservice;

	public any function getMenu( ) {

		if ( sessionservice.isLoggedIn() ) {

			return ['Dashboard' , 'Profile' , 'Logout' ];

		} else
		{
			return [];
		}

	}

}
