Package.describe({
	name: 'oiler:rewrites',
	version: '0.0.1',
	summary: 'Oiler Rewrites',
	git: ''
});

Package.onUse(function(api) {
	api.use([
		'ecmascript',
		'check',
		//'http',
		////'rocketchat:settings',
		//'rocketchat:callbacks',
		//'rocketchat:models',
	]);

	api.addFiles('rocketchat-lib/server/methods/updateMessage.js', 'server');
	//api.addFiles('client/client.js', 'client');
	//api.mainModule('rocketchat-lib/server/methods/updateMessage.js', 'server');
	//api.mainModule('client/client.js', 'client');
});
