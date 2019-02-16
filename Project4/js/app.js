var apiKey = "AIzaSyDCE5Kd2WKzCToXWcRIuR9qE_BRKKAuTWU";//API KEY GOES HERE, this key works, but if you need to use a different key when grading, just paste it over this string
var apiURL = "https://maps.googleapis.com/maps/api/geocode/json?key=" + apiKey;

$(document).ready(function() {
	$("#btnGeo").click(function() {
		var address = $.trim($("#address").val());
		var query = apiURL + "&address=" + address;
		
		$.getJSON(query, function(json) {
			$("#googleResults").html("");
			$("#googleResults").append("<hr />");

			for(var i = 0; i < json.results.length; i++) {
				var formattedAddress = json.results[i].formatted_address;								
				var longAddress = "";
				var shortAddress = "";
				
				for(var j = 0; j < 6; j++) {
					longAddress += json.results[i].address_components[j].long_name;
					shortAddress += json.results[i].address_components[j].short_name;
				}
				
				$("#googleResults").append(
						"<p><b>Formatted Address: </b>" + formattedAddress + "</p>"
						+ "<p><b>Long Address: </b>" + longAddress + "</p>"
						+ "<p><b>Short Address: </b>" + shortAddress + "</p>"
						+ "<hr />");
			}
		});
	});
});