component {

	this.sessionManagement="true";
	this.name="#hash(getCurrentTemplatePath())#";
	this.applicationTimeout=CreateTimeSpan(1,0,0,0);
	this.sessionTimeout=CreateTimeSpan(0,1,0,0);
	this.mappings["framework"] = expandpath("../framework");
	this.mappings["application"] = expandpath("../");
	this.datasources["todos"] = {
		// Embedded hsql db
		class: 'org.hsqldb.jdbcDriver',
		connectionString: 'jdbc:hsqldb:file:./application/db/todos'
		// Example ds for Heroku postgres
		//class: 'org.postgresql.Driver',
		//connectionString: 'jdbc:postgresql://ec2-107-22-197-152.compute-1.amazonaws.com:5432/d371fthq0lkgsb?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory&user=xxxxxxx&password=xxxxxxx'
	};
	this.datasource="todos";
	this.ormenabled="true";
	this.ormsettings={
		datasource="todos" ,
		cfclocation="/application/entities" ,
		dbcreate="update",
		autoManageSession="false",
		flushatrequestend="false"
	};

    function _get_framework_one() {

        if ( !structKeyExists( request, '_framework_one' ) ) {

            // create your FW/1 application:
            request._framework_one = new application.app({
				// FW/1 - configuration is defined in application/app.cfc:
				})
		}

        return request._framework_one;

    }

    // delegation of lifecycle methods to FW/1:
    function onApplicationStart() {
        return _get_framework_one().onApplicationStart();
    }
    function onError( exception, event ) {
        return _get_framework_one().onError( exception, event );
    }
    function onRequest( targetPath ) {
        return _get_framework_one().onRequest( targetPath );
    }
    function onRequestEnd() {
        return _get_framework_one().onRequestEnd();
    }
    function onRequestStart( targetPath ) {
        return _get_framework_one().onRequestStart( targetPath );
    }
    function onSessionStart() {
        return _get_framework_one().onSessionStart();
    }

}
