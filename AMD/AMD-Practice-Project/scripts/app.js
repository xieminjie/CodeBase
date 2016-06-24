define(['jquery'], function($) {    
	// We use the object defined in the 'messages' module and passed to our
	// callback by RequireJS and call its 'getHello'() function when the
	// DOM has been loaded using the jQuery module
	$(function() {
		$('#test').text('helloworld');
	});    
});