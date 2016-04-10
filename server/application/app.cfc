component extends="framework.one" {

	// FW/1 - configuration:
	variables.framework = {
		base : "/application/fw1/" ,
		dilocations : '/application/services',
		unhandledExtensions : 'svg',
		unhandledPaths : 'assets',
		reloadApplicationOnEveryRequest : true,
        generateSES : true,
        defaultItem : 'app',
        defaultSection : 'public',
		routess = [
		  { "$GET/public/getMenu" = "/public/getMenu/" },
		  { "$POST/public/authenticate" = "/public/authenticate/" },
		  { "$get/public/authenticate" = "/public/authenticate/" },
		  { "$GET/:section" = "/:section/app/" },
		  { "*" = "/public/app/" }
		]
	}

	function setupRequest() {

		request.context.page = structNew();
		request.context.page["title"] = "Default Page";
		request.context.FW1Version = framework.version;
		request.context.LuceeVersion = "4.5.3.001";

        if (structKeyexists(URL,"trace")) {
			variables.framework.trace = "true";
			}
        if (structKeyexists(URL,"ORMreload")) {
			ORMFlush();
			ORMReload();
			}
        if (structKeyexists(URL,"killsession")) {
			structClear(session);
			redirect('public.default');
			}
		if (structKeyexists(URL,"ORMreloadFull")) {
			ORMFlush();
			ORMReload();
			structClear(session);
			redirect('public.default');
			}

        request.context.rules = getBeanfactory().getBean( "authorisation" ).getRules();
		if ( structKeyExists( session , "permissions" ) ) {

			var userpermissions = session.permissions;
		}
		else var userpermissions = 1;

		rc.authstuff = getBeanfactory().getBean( "authorisation" ).authorise( userPermissions = userpermissions , resource = getSection()  );
        if ( !getBeanfactory().getBean( "authorisation" ).authorise( userPermissions = userpermissions , resource = getSection()  ).authorised )
        {
				redirect("public.unauthorised");

        }


    }

	function onMissingView() {

		return view("public/app");

    }

	function failure( exception, event ) { // "private"

		if ( structKeyExists(exception, 'rootCause') ) {
			exception = exception.rootCause;
		}
		writeOutput( '<h1>Something bad happened in #event#</h1>' );
		if ( structKeyExists( request, 'failedAction' ) ) {
			writeOutput( '<p>The action #request.failedAction# failed.</p>' );
		}
		writeOutput( '<h2>#exception.message#</h2>' );
		writeOutput( '<p>#exception.detail# (#exception.type#)</p>' );
		dumpException(exception);
		//	dumpException(session);
		//	dumpException(request);

	}

}
