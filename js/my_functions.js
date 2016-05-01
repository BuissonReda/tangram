function format_shapes_data(d){
	points = "";
	for(var key in d.points_position){
		points += d.points_position[key].x + ',' + d.points_position[key].y + ' ';
	}
	return points;
}

function center_polygons(d, width, height){
	moyenne_x = 0; moyenne_y = 0, length = 0;

	for(var key in d.points_position){
	  moyenne_x += d.points_position[key].x;
	  moyenne_y += d.points_position[key].y;
	  length++;
	}

	moyenne_x /= length; moyenne_y /= length;
	barycentre = {"x":moyenne_x, "y":moyenne_y};

	return barycentre;
}

function effectiveDeviceWidth() {
    var deviceWidth = window.orientation == 0 ? window.screen.width : window.screen.height;
    // iOS returns available pixels, Android returns pixels / pixel ratio
    // http://www.quirksmode.org/blog/archives/2012/07/more_about_devi.html
    if (navigator.userAgent.indexOf('Android') >= 0 && window.devicePixelRatio) {
        deviceWidth = deviceWidth / window.devicePixelRatio;
    }
    return deviceWidth;
}

function effectiveDeviceHeight() {
    var deviceHeight= window.orientation == 0 ? window.screen.height : window.screen.width;
    // iOS returns available pixels, Android returns pixels / pixel ratio
    // http://www.quirksmode.org/blog/archives/2012/07/more_about_devi.html
    if (navigator.userAgent.indexOf('Android') >= 0 && window.devicePixelRatio) {
        deviceHeight = deviceHeight / window.devicePixelRatio;
    }
    return deviceHeight;
}