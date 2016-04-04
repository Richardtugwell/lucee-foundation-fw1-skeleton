<div class="grid-frame vertical">
	<div class="dark title-bar">
		<div class="center title"><a ui-sref="home">Lucee / FW1 / Foundation</a></div>
		<span class="left hide-for-medium">
			<a zf-toggle="sub-nav">Menu</a>
		</span>
		<span class="right">
			<a ui-sref="home.login">Login</a>
		</span>
	</div>
	<div class="grid-block">
		<div zf-panel position="left" id="sub-nav" class="medium-grid-block medium-2 vertical">
			<cfoutput>#view("public/sidebar")#</cfoutput>
		</div>
		<div class="grid-block small-12 medium-10">
			<div class="grid-content">
	            <div ui-view="content"></div>
			</div>
		</div>
</div>
