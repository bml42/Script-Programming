/*$global*/
$(document).ready(function() {
	$.ajax({
		type: "GET",
		url: "https://jsonplaceholder.typicode.com/photos",
		dataType: "json",
		success: function(data) {
			$("#content").html("");
			var currentPhotoAlbum = 0;

			$.each(data, function(index, album) {
				if(album.albumId != currentPhotoAlbum) {
					$("#content").append("<h2>Photos in Album " + album.albumId + "</h2>");
					currentPhotoAlbum = album.albumId;
				}

				$("#content").append("<h3>Photo " + album.id + "</h3>");
				$("#content").append("<h3>" + album.title + "</h3>");
				$("#content").append("<a href='" + album.url + "'><img src='" + album.thumbnailUrl + "' /></a>");
				$("#content").append("<hr />");
			});
		},
		error: function(xhr, textStatus, errorThrown) {
			alert(xhr.status + ":" + textStatus);
		}
	});
});
