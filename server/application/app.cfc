component extends="framework.one" {

	// FW/1 - configuration:
	variables.framework = {
		base : "/application/fw1/" ,
		dilocations : '/application/services',
		unhandledPaths : '/angular',
		reloadApplicationOnEveryRequest : true,
        generateSES : true,
        defaultItem : 'app',
        SESOmitIndex : true,
		routes = [
		  { "$GET/:section" = "/:section/app/" },
		  { "*" = "/main/app/" }
		]
	}

	function setupRequest() {

		request.context.page = structNew();
		request.context.page["title"] = "Default Page";
		request.context.FW1Version = framework.version;
		request.context.LuceeVersion = "4.5.3.001";

    }

	function onMissingView() {

		return view("main/404");

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
