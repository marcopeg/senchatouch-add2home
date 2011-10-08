/**
 * InstallToHome [plugin]
 * by MovableApp.com
 *
 * Usage example
 *
 */
Ext.setup({
	onReady: function() {
		
		var viewport;
		
		viewport = new Ext.Panel({
			
			fullscreen:true,
			styleHtmlContent:true,
			html: 'AddToHome Plugin Test Page...',
			
			
			plugins: [
				new MovableApp.plugins.AddToHome({
					debug:true
				})
			],
			
		});
		
		viewport.show();
		
	}
});