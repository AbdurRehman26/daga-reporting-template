//Require Module
app = require('./config');
//Define Module
app.Map = (() => {
	const config = app.Config;
	const dataApiUrl = config.getApiUrl();
	const routes = app.Routes;
	const template = app.Template;


	var map;
	function initMap(data) {


		map = new google.maps.Map(document.getElementById('map'), {
			zoom: 15,
			center: new google.maps.LatLng(31.4858037,74.345896),
			mapTypeId: 'roadmap'
		});

		var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
		var icons = {
			parking: {
				icon: iconBase + 'parking_lot_maps.png'
			},
			library: {
				icon: iconBase + 'library_maps.png'
			},
			info: {
				icon: iconBase + 'info-i_maps.png'
			}
		};
		var dataProvider = [];

		for(key in data){
			
			var latLngValue = data[key]['location'].split(',');
			var latValue = latLngValue[0] ? latLngValue[0].replace(" ") : 0;
			var lngValue = latLngValue[1] ? latLngValue[1].replace("undefined") : 0;
					
			latValue = parseFloat(latValue);
			lngValue = parseFloat(lngValue);
			console.log(latValue , lngValue , 11111111);

			dataProvider.push({
				position : new google.maps.LatLng(latValue, lngValue)
			})
		}

        // Create markers.
        dataProvider.forEach(function(feature) {
        	var marker = new google.maps.Marker({
        		position: feature.position,
        		icon: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png',
        		map: map
        	});
        });
    }


    return {
    	initMap: initMap,
    }
})();

module.exports = app.Map;




