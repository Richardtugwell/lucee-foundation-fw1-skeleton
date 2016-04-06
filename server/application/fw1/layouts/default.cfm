<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html ng-app="<cfoutput>#getSection()#</cfoutput>" xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Lucee / FW1 / Foundation for Apps</title>
	<link rel="stylesheet" href="/assets/css/app.css">
	<link rel="stylesheet" href="/assets/apps/css/app.<cfoutput>#getSection()#</cfoutput>.css">
</head>
<body>
	<cfoutput>#body#</cfoutput>
    <script src="/assets/js/app.js"></script>
    <script src="/assets/js/templates.js"></script>
    <script src="/assets/apps/js/app.<cfoutput>#getSection()#</cfoutput>.templates.js"></script>
    <script src="/assets/apps/js/app.<cfoutput>#getSection()#</cfoutput>.js"></script>
</body>
</html>
