/**
 * InstallToHome [plugin]
 * by MovableApp.com
 *
 * Usage example source code.
 *
 * Documentation published here:
 * http://www.movableapp.com/2011/10/plugin-add-to-home/
 */
Ext.setup({
	onReady: function() {
		
		var viewport;
		
		viewport = new Ext.Panel({
			
			fullscreen:			true,
			styleHtmlContent:	true,
			scroll:				'vertical',
			
			html: '<h2>AddToHome Plugin</h2> Test Page...<br /><br />Source and Docs:<br /><a href="http://www.movableapp.com/2011/10/plugin-add-to-home/">http://www.movableapp.com/2011/10/plugin-add-to-home/</a>',
			
			// Here install and config the plugin
			plugins: [
				new MovableApp.plugins.AddToHome({
					debug:true,
					showToolbar:true
				})
			],
			
		});
		
		viewport.show();
		
	}
});