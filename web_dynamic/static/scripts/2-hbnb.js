$(function () {
	url = "http://0.0.0.0:5001/api/v1/status/"
	$.getJSON(url, function (text) {
			if (text.status === "OK") {
					$("DIV#api_status").addClass("available");
					$("DIV#api_status").removeClass("circle");
			}
			else {
					$("DIV#api_status").removeClass("available");
					$("DIV#api_status").addClass("circle");
			}
	});

	const amenityList = {}
	$(".amenities ul li").on('change', "input[type=checkbox]",function(){
			if ($(this).is(':checked')) {
					amenityList[$(this).attr('data-name')] = $(this).attr('data-id');
			}
			else{
					delete amenityList[$(this).attr('data-name')];
			}
			const amenityKeys = Object.keys(amenityList);
			$('.amenities h4').text(amenityKeys.join(', '));
	});
});
