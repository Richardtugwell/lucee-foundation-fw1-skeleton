component  accessors="true" {

	property authentication;

	rules = createObject("java", "java.util.LinkedHashMap").init() ;

  	rules['dashboard*'] = 8;
  	rules['public*'] = 1;

	roles = structNew() ;

	roles["admin"] = 16;

	public struct function getVariables(){
		return variables;
	}

	public array function getAuthRoles(){
		return roles;
	}

	public array function getAuthRoleNames(){
		var roleNames = arrayNew(1);
		for (var role in roles ) {
			arrayAppend( rolenames , { name=role , selected=false } );
		}
		return roleNames;
	}

	public any function getUserPermissions( userroles ) {

		permissions = 1;
		for (var role in userRoles ) {
			if ( role.selected ) {
			permissions = permissions + roles[role.name];
			}
		}
		return permissions;
	}

	public struct function authorise( required number userPermissions , required string resource  ) {

	var ret = { };
	ret["authorised"] = false;

	for (keyName in rules) {

		terminator = "$";

		if (right( keyName , 1 ) eq '*') {
			terminator = '';
			}

	    if ( REfindNOCASE( '^' & keyName & terminator , resource) ) {
	       	ret["authkey"] = keyName;
	       	ret["resource"] = resource;
	       	ret["terminator"] = terminator;
	       	ret["authorised"] = bitAnd( rules[ keyName ] , userpermissions ) gt 0;
			return ret;
	        exit;
	    	}

		}

	return ret;

    }

	public struct function getRules( ) {
	    return rules;
    }
}
