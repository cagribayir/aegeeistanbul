d.notifyWhenLoaded(".intro__cover");

WebFont.load({
	google: {
		families: ["Roboto Slab:300", "Source Sans Pro:300,900"]
	},
	typekit: {
		id: "bebas-neue",
		api: "//use.edgefonts.net"
	},
	active: function() {
		d.runWhenAllLoaded(init);
	},
	inactive: function() {
		window.location.reload();
	},
	classes: false,
	timeout: 8000
});
