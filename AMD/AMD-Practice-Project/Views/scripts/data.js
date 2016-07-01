define(['jquery'],function($){
	var url = '/data';
	function ajaxHandler(options,getJsonData){
		$.ajax({
			type: options.type,
			url: options.url,
			contentType: options.contentType,
			success: function(response) {
				getJsonData(response);
			},
			error: function(response){
				console.log('error');
			}
		});
	}
	return{
		ajaxHandler:ajaxHandler
	}
});