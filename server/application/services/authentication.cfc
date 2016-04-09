component accessors="true"   {

	public any function authenticate( required string user , required string password  ) {

		var users = {
			tom: {
				iduser: 1,
				password: 'pwd',
			 	permissions: 8
			},
			dick: {
				iduser: 2,
				password: 'pwd',
			 	permissions: 16
			}
		}

        var res = {};

        res['authorised'] = false;
        res['iduser'] = 0;

		if ( structKeyExists(users , arguments.user) AND user.password eq arguments.password ) {

			var user = users[ arguments.user ];

			res["authorised"] = true;
			res["iduser"] = user.iduser;
			res["permissions"] = user.permissions;
		}

	return res;

	}

}
