$(document).ready(function () {

	var startPos;
	var geoOptions = {
	    timeout: 10 * 1000,
	    enableHighAccuracy: true
	}

	var geoSuccess = function (position) {
	    startPos = position.coords.latitude + "|" + position.coords.longitude;
	    $("#id_userLoc").val(startPos)
	    $('form#weatherForm').submit();
	};

	var geoError = function (error) {
	    var x = document.getElementById("geolocTypeMessage");
	    console.log('Error occurred. Error code: ' + error.code);
	    switch (error.code) {
	        case error.PERMISSION_DENIED:
	            x.innerHTML = "User denied the request for GeolocType."
	            break;
	        case error.POSITION_UNAVAILABLE:
	            x.innerHTML = "locType information is unavailable."
	            break;
	        case error.TIMEOUT:
	            x.innerHTML = "The request to get user locType timed out."
	            break;
	        case error.UNKNOWN_ERROR:
	            x.innerHTML = "An unknown error occurred."
	            break;
	    }

	    $("#geolocTypeMessage").removeClass('hidden');
		// error.code can be:
		//   0: unknown error
		//   1: permission denied
		//   2: position unavailable (error response from locType provider)
		//   3: timed out
	};

	var pageInitialize = function () {
	    if ($("#id_locType").val())
	    {
	        $("#id_userLoc").addClass('hidden');
	        $(".btn-submit").addClass('hidden');
	        $("#btn-currentlocType").addClass('active').prop( "disabled", true );
	    }
	    else
	    {
	        $("#btn-customlocType").addClass('active').prop("disabled", true);
	    }
	};

	
	pageInitialize();

	$(".btn-group > .btn").on("click", function () {
		if(this.id=="btn-currentlocType")
		{
		    
		    $(".btn-submit").addClass('hidden');
		    $("#id_locType").val(true);
		    $("#id_userLoc").addClass('hidden');
			if(!navigator.geolocation)
			{
				$("#geolocTypeMessage").removeClass('hidden');
			}
            else
			    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
			$("#btn-currentlocType").addClass('active').prop("disabled", true);
			$("#btn-customlocType").removeClass('active').prop("disabled", false);
		}
		else
		{
		    $(".btn-submit").removeClass('hidden');
		    $("#id_userLoc").removeClass('hidden');
			$("#geolocTypeMessage").addClass('hidden');
			$("#id_locType").val(false);
			$("#id_userLoc").val("")
			$("#btn-customlocType").addClass('active').prop("disabled", true);
			$("#btn-currentlocType").removeClass('active').prop("disabled", false);
		}
		
	});

	$("#form-block").removeClass('hidden');
   
});