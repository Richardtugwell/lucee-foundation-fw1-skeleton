component {

	public any function getIDaccount(  ) {

	    if ( structKeyExists( session , "IDaccount" ) )
	    	{
	    	if ( len( trim( session['IDaccount'] ) ) )
	    		{
				return session['IDaccount'];
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
