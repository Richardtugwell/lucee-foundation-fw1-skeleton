component {

	public any function isLoggedIn(  ) {

	    if ( structKeyExists( session , "IDuser" ) )
	    	{
	    	if ( len( trim( session['IDuser'] ) ) )
	    		{
				return true;
	    		}
	    	}
	    return false;

	}

	public any function getIDuser(  ) {

	    if ( structKeyExists( session , "IDuser" ) )
	    	{
	    	if ( len( trim( session['IDuser'] ) ) )
	    		{
				return session['IDuser'];
	    		}
	    	else
	    		return 0;
	    	}

	    }

	public any function getPermissions(  ) {

	    if ( structKeyExists( session , "permissions" ) )
	    	{
	    	if ( len( trim( session['permissions'] ) ) )
	    		{
				return session['permissions'];
	    		}
	    	else
	    		return 0;
	    	}


	    }

}
