component accessors="true" {

	property sessionservice;

	public any function getMenu( ) {

		if ( sessionservice.isLoggedIn() ) {

			// In this simple example, every user gets the same menu options when they ar logged in
			// In many apps, you would customise menus based on user privileges
			return [
				{'name':'Todos' , 'link':  'todos'},
				{'name':'Dashboard' , 'link':  'dashboard'},
				{'name':'Profile' , 'link':  'profile'},
				{'name':'Logout' , 'link':  'profile.logout'}
				]
		} else	return [];

	}

}
