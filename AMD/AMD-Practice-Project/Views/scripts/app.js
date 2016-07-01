define(['jquery','data'], function($,data) {    
	var options = {
		type:'GET',
		url:'/data',
		contentType:'application/json',
	}
	$(function() {
		var getJsonData = function(response){
			console.log(response);
		}
		data.ajaxHandler(options,getJsonData);

	});    
});