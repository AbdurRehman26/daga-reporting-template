/*! jquery-locationpicker - v0.1.12 - 2015-01-05 */
(function ($) {
    function GMapContext(domElement, options) {
        var _map = new google.maps.Map(domElement, options);
        var _marker = new google.maps.Marker({
            position: new google.maps.LatLng(16.19335, -52.92695),
            map: _map,
            title: "Drag Me",
            draggable: options.draggable
        });
        return {
            map: _map,
            marker: _marker,
            circle: null,
            location: _marker.position,
            radius: options.radius,
            locationName: options.locationName,
            addressComponents: {
                formatted_address: null,
                addressLine1: null,
                addressLine2: null,
                streetName: null,
                streetNumber: null,
                city: null,
                district: null,
                state: null,
                stateOrProvince: null
            },
            settings: options.settings,
            domContainer: domElement,
            geodecoder: new google.maps.Geocoder()
        };
    }

    var GmUtility = {
        drawCircle: function (gmapContext, center, radius, options) {
            if (gmapContext.circle != null) {
                gmapContext.circle.setMap(null);
            }
            if (radius > 0) {
                radius *= 1;
                options = $.extend({
                    strokeColor: "#4a7938",
                    strokeOpacity: .35,
                    strokeWeight: 2,
                    fillColor: "#7ad458",
                    fillOpacity: .2
                }, options);
                options.map = gmapContext.map;
                radius = (radius / 20902231) * 6371000;
                options.radius = radius;
                options.center = center;
                gmapContext.circle = new google.maps.Circle(options);
                return gmapContext.circle;
            }
            return null;
        },
        setPosition: function (gMapContext, location, callback) {
            gMapContext.location = location;
            gMapContext.marker.setPosition(location);
            gMapContext.map.panTo(location);
            this.drawCircle(gMapContext, location, gMapContext.radius, {});
            if (gMapContext.settings.enableReverseGeocode) {
                gMapContext.geodecoder.geocode({
                    latLng: gMapContext.location
                }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
                        gMapContext.locationName = results[0].formatted_address;
                        gMapContext.addressComponents = GmUtility.address_component_from_google_geocode(results[0].address_components);
                    }
                    if (callback) {
                        callback.call(this, gMapContext);
                    }
                });
            } else {
                if (callback) {
                    callback.call(this, gMapContext);
                }
            }
        },
        locationFromLatLng: function (lnlg) {
            return {
                latitude: lnlg.lat(),
                longitude: lnlg.lng()
            };
        },
        address_component_from_google_geocode: function (address_components) {
            var result = {};
            for (var i = address_components.length - 1; i >= 0; i--) {
                var component = address_components[i];
                if (component.types.indexOf("postal_code") >= 0) {
                    result.postalCode = component.short_name;
                } else if (component.types.indexOf("street_number") >= 0) {
                    result.streetNumber = component.short_name;
                } else if (component.types.indexOf("route") >= 0) {
                    result.streetName = component.short_name;
                } else if (component.types.indexOf("locality") >= 0) {
                    result.city = component.short_name;
                } else if (component.types.indexOf("sublocality") >= 0) {
                    result.district = component.short_name;
                } else if (component.types.indexOf("administrative_area_level_1") >= 0) {
                    result.stateOrProvince = component.short_name;
                } else if (component.types.indexOf("country") >= 0) {
                    result.country = component.short_name;
                }
            }
            result.addressLine1 = [result.streetNumber, result.streetName].join(" ").trim();
            result.addressLine2 = "";
            return result;
        }
    };

    function isPluginApplied(domObj) {
        return getContextForElement(domObj) != undefined;
    }

    function getContextForElement(domObj) {
        return $(domObj).data("locationpicker");
    }

    function updateInputValues(inputBinding, gmapContext) {
        if (!inputBinding) return;
        var currentLocation = GmUtility.locationFromLatLng(gmapContext.location);
        if (inputBinding.latitudeInput) {
            inputBinding.latitudeInput.val(currentLocation.latitude).change();
        }
        if (inputBinding.longitudeInput) {
            inputBinding.longitudeInput.val(currentLocation.longitude).change();
        }
        if (inputBinding.radiusInput) {
            inputBinding.radiusInput.val(gmapContext.radius).change();
        }
        if (inputBinding.locationNameInput) {
            inputBinding.locationNameInput.val(gmapContext.locationName).change();
        }
    }

    function setupInputListenersInput(inputBinding, gmapContext) {
        if (inputBinding) {
            if (inputBinding.radiusInput) {
                inputBinding.radiusInput.on("change", function (e) {
                    if (!e.originalEvent) {
                        return;
                    }
                    gmapContext.radius = $(this).val();
console.log('usama', gmapContext.location.lat(), gmapContext.location.lng());
                    GmUtility.setPosition(gmapContext, gmapContext.location, function (context) {
console.log('usama1', context.location.lat(), context.location.lng());
                        context.settings.onchanged.apply(gmapContext.domContainer, [GmUtility.locationFromLatLng(context.location), context.radius, false]);
                    });
                });
            }
            if (inputBinding.locationNameInput && gmapContext.settings.enableAutocomplete) {
                gmapContext.autocomplete = new google.maps.places.Autocomplete(inputBinding.locationNameInput.get(0));
                google.maps.event.addListener(gmapContext.autocomplete, "place_changed", function () {
                    var place = gmapContext.autocomplete.getPlace();
                    if (!place.geometry) {
                        gmapContext.settings.onlocationnotfound(place.name);
                        return;
                    }
                    GmUtility.setPosition(gmapContext, place.geometry.location, function (context) {
                        updateInputValues(inputBinding, context);
                        context.settings.onchanged.apply(gmapContext.domContainer, [GmUtility.locationFromLatLng(context.location), context.radius, false]);
                    });
                });
            }
            if (inputBinding.latitudeInput) {
                inputBinding.latitudeInput.on("change", function (e) {
                    if (!e.originalEvent) {
                        return;
                    }
                    GmUtility.setPosition(gmapContext, new google.maps.LatLng($(this).val(), gmapContext.location.lng()), function (context) {
                        context.settings.onchanged.apply(gmapContext.domContainer, [GmUtility.locationFromLatLng(context.location), context.radius, false]);
                    });
                });
            }
            if (inputBinding.longitudeInput) {
                inputBinding.longitudeInput.on("change", function (e) {
                    if (!e.originalEvent) {
                        return;
                    }
                    GmUtility.setPosition(gmapContext, new google.maps.LatLng(gmapContext.location.lat(), $(this).val()), function (context) {
                        context.settings.onchanged.apply(gmapContext.domContainer, [GmUtility.locationFromLatLng(context.location), context.radius, false]);
                    });
                });
            }
        }
    }

    function autosize(gmapContext) {
        google.maps.event.trigger(gmapContext.map, "resize");
        setTimeout(function () {
            gmapContext.map.setCenter(gmapContext.marker.position);
        }, 300);
    }

    $.fn.locationpicker = function (options, params) {
        if (typeof options == "string") {
            var _targetDomElement = this.get(0);
            if (!isPluginApplied(_targetDomElement)) return;
            var gmapContext = getContextForElement(_targetDomElement);
            switch (options) {
                case "location":
                    if (params == undefined) {
                        var location = GmUtility.locationFromLatLng(gmapContext.location);
                        location.radius = gmapContext.radius;
                        location.name = gmapContext.locationName;
                        return location;
                    } else {
                        if (params.radius) {
                            gmapContext.radius = params.radius;
                        }
                        GmUtility.setPosition(gmapContext, new google.maps.LatLng(params.latitude, params.longitude), function (gmapContext) {
                            updateInputValues(gmapContext.settings.inputBinding, gmapContext);
                        });
                    }
                    break;

                case "subscribe":
                    if (params == undefined) {
                        return null;
                    } else {
                        var event = params.event;
                        var callback = params.callback;
                        if (!event || !callback) {
                            console.error('LocationPicker: Invalid arguments for method "subscribe"');
                            return null;
                        }
                        google.maps.event.addListener(gmapContext.map, event, callback);
                    }
                    break;

                case "map":
                    if (params == undefined) {
                        var locationObj = GmUtility.locationFromLatLng(gmapContext.location);
                        locationObj.formattedAddress = gmapContext.locationName;
                        locationObj.addressComponents = gmapContext.addressComponents;
                        return {
                            map: gmapContext.map,
                            marker: gmapContext.marker,
                            location: locationObj
                        };
                    } else {
                        return null;
                    }

                case "autosize":
                    autosize(gmapContext);

                    // gmapContext.marker.setMap(null);
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(function (position) {
                            console.log(position.coords.latitude);
                            gmapContext.marker.setMap(gmapContext.map);
                            gmapContext.marker.setPosition({lat: parseFloat(position.coords.latitude), lng: parseFloat(position.coords.longitude)});

                            GmUtility.setPosition(gmapContext, gmapContext.marker.position, function (context) {
                                var currentLocation = GmUtility.locationFromLatLng(gmapContext.location);
                                context.settings.onchanged.apply(gmapContext.domContainer, [currentLocation, context.radius, true]);
                                updateInputValues(gmapContext.settings.inputBinding, gmapContext);
                            });
                        });
                    } else { 
                       console.log("Geolocation is not supported by this browser.");
                    }


             // Sets the map on all markers in the array.
                gmapContext.map.addListener('click', function(event) {
                    gmapContext.marker.setMap(gmapContext.map)
                    gmapContext.marker.setPosition(event.latLng)

                    GmUtility.setPosition(gmapContext, gmapContext.marker.position, function (context) {
                        var currentLocation = GmUtility.locationFromLatLng(gmapContext.location);
                        context.settings.onchanged.apply(gmapContext.domContainer, [currentLocation, context.radius, true]);
                        updateInputValues(gmapContext.settings.inputBinding, gmapContext);
                    });
                });

                google.maps.event.addListener(gmapContext.marker, "dragend", function (event) {
                    GmUtility.setPosition(gmapContext, gmapContext.marker.position, function (context) {
                        var currentLocation = GmUtility.locationFromLatLng(gmapContext.location);
                        context.settings.onchanged.apply(gmapContext.domContainer, [currentLocation, context.radius, true]);
                        updateInputValues(gmapContext.settings.inputBinding, gmapContext);
                    });
                });

                gmapContext.autocomplete = new google.maps.places.Autocomplete(gmapContext.settings.inputBinding.locationNameInput.get(0));
                google.maps.event.addListener(gmapContext.autocomplete, "place_changed", function () {
                    var place = gmapContext.autocomplete.getPlace();
                    if (!place.geometry) {
                        gmapContext.settings.onlocationnotfound(place.name);
                        return;
                    }
                    gmapContext.marker.setMap(gmapContext.map)
                    gmapContext.marker.setPosition(place.geometry.location)
                    GmUtility.setPosition(gmapContext, place.geometry.location, function (context) {
                        updateInputValues(gmapContext.settings.inputBinding, context);
                        context.settings.onchanged.apply(gmapContext.domContainer, [GmUtility.locationFromLatLng(context.location), context.radius, false]);
                    });
                });

                    return this;
            }
            return null;
        }
        return this.each(function () {
            var $target = $(this);
            if (isPluginApplied(this)) return;
            var settings = $.extend({}, $.fn.locationpicker.defaults, options);
            var gmapContext = new GMapContext(this, {
                zoom: settings.zoom,
                center: new google.maps.LatLng(settings.location.latitude, settings.location.longitude),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: false,
                disableDoubleClickZoom: false,
                scrollwheel: settings.scrollwheel,
                streetViewControl: false,
                radius: settings.radius,
                locationName: settings.locationName,
                settings: settings,
                draggable: settings.draggable
            });
            $target.data("locationpicker", gmapContext);
            google.maps.event.addListener(gmapContext.marker, "dragend", function (event) {
                GmUtility.setPosition(gmapContext, gmapContext.marker.position, function (context) {
                    var currentLocation = GmUtility.locationFromLatLng(gmapContext.location);
                    context.settings.onchanged.apply(gmapContext.domContainer, [currentLocation, context.radius, true]);
                    updateInputValues(gmapContext.settings.inputBinding, gmapContext);
                });
            });
            GmUtility.setPosition(gmapContext, new google.maps.LatLng(settings.location.latitude, settings.location.longitude), function (context) {
                updateInputValues(settings.inputBinding, gmapContext);
                setupInputListenersInput(settings.inputBinding, gmapContext);
                context.settings.oninitialized($target);
            });
        });
    };
    $.fn.locationpicker.defaults = {
        location: {
            latitude: 40.7324319,
            longitude: -73.82480799999996
        },
        locationName: "",
        radius: 25,
        zoom: 15,
        scrollwheel: true,
        inputBinding: {
            latitudeInput: null,
            longitudeInput: null,
            radiusInput: null,
            locationNameInput: null
        },
        enableAutocomplete: false,
        enableReverseGeocode: true,
        draggable: true,
        onchanged: function (currentLocation, radius, isMarkerDropped) {
            return true;
            console.log('onchange');
            if (this.id == 'share-modal-location-map') {
                console.log(this.position);
                console.log(currentLocation);
                radius = parseInt(radius);
                var latLong = {lat: parseFloat(currentLocation.latitude), lng: parseFloat(currentLocation.longitude)};
                console.log(latLong);

                var map = new google.maps.Map(document.getElementById('share-modal-location-map'), {
                    zoom: 15,
                    center: latLong,
                    markerIcon: 'http://www.iconsdb.com/icons/preview/tropical-blue/map-marker-2-xl.png',
                    enableAutocomplete: true,
                });

                var marker = new google.maps.Marker({
                    position: latLong,
                    map: map,
                    zIndex: 99999999,
                    draggable: true,

                });

                google.maps.event.addListener(marker, "dragend", function (event) {
                    console.log('ondrag');
                    var lat = event.latLng.lat();
                    var lng = event.latLng.lng();
                    var geocoder = new google.maps.Geocoder;
                    var infowindow = new google.maps.InfoWindow;
                    geocodeLatLng(geocoder, map, infowindow, lat, lng);

                    // var gmapContext = $('#share-modal-location-map').data('locationpicker');
                    // GmUtility.setPosition(gmapContext, gmapContext.marker.position, function (context) {
                    //     var currentLocation = GmUtility.locationFromLatLng(event.latLng);
                    //     context.settings.onchanged.apply(gmapContext.domContainer, [currentLocation, context.radius, true]);
                    //     updateInputValues(gmapContext.settings.inputBinding, gmapContext);
                    // });
                });


                var circle = new google.maps.Circle({
                    map: map,
                    radius: radius,
                    fillColor: '#7ad458',
                    strokeColor: "#4a7938",
                    strokeOpacity: .35,
                    strokeWeight: 2,
                    fillOpacity: .2
                });

                circle.bindTo('center', marker, 'position');


            }

        },
        onlocationnotfound: function (locationName) {
        },
        oninitialized: function (component) {
        }


    };


    function geocodeLatLng(geocoder, map, infowindow, lat, long) {
        var latlng = {lat: parseFloat(lat), lng: parseFloat(long)};
        console.log('i am here');
        geocoder.geocode({'location': latlng}, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {

                    $('#share-modal-location-address').val(results[0].formatted_address);

                } else {
                    window.alert('No results found');
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    }

    function getAddress(lat,lng) {
        var lat = parseFloat(lat);
        var lng = parseFloat(lng);
        var latlng = new google.maps.LatLng(lat, lng);
        var geocoder = geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'latLng': latlng }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[1]) {
                   $("#share-modal-location-address").val(results[1].formatted_address);

                }
            }
        });

    }

})(jQuery);