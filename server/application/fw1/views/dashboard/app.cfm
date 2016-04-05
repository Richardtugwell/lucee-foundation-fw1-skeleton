<div class="grid-frame vertical">
	<div ui-view="header"></div>

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
