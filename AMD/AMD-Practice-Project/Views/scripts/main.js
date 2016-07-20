require.config({
	paths: {
		'jquery': '../lib/jquery-3.0.0',
		'react':'../lib/react.js',
		'react-dom':'../lib/react-dom.js'
	}
});
requirejs(['app']);