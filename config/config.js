/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

//https://www.coordonnees-gps.fr
//Default = ENSC
var latitude =  44.806287;
var longitude = -0.596923;

var googleApiKey = "";
var navitiaKey = "";
var navitiaPassword = "";
var darkSkyApiKey = "";
var agendaUrl = "";
var newsUrl = "http://www.bfmtv.com/rss/info/flux-rss/flux-toutes-les-actualites/";

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "fr",
	timeFormat: 24,
	units: "metric",

	modules: [
	
		{
			module: 'MMM-ModuleToggle',
			config: {
				hide: ["newsfeed", "MMM-GoogleMapsTraffic", "MMM-MyCalendar"]
			}
		},
				{
			module: 'MMM-VoiceInterface',
			position: 'bottom_bar', 
		},
		{
			module: "clock",
			position: "top_left",
			displaySeconds: false
		},
		{
			module: 'MMM-forecast-io',
			position: 'top_right',  // This can be any of the regions.
			config: {
				apiKey: darkSkyApiKey,
				latitude: latitude,
				longitude: longitude,
				showForecast: true,
				maxDaysForecast: 1,
				enablePrecipitationGraph: true,
			}
		},
		{
			module: "MMM-GoogleMapsTraffic",
			position: "right",
			config: {
				key: googleApiKey, 
				lat: latitude,
				lng: longitude,
				height: "200px",
				width: "200px",
				zoom: 11
			}
		},
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "MMM-MyCalendar",
			position: "top_left",	// This can be any of the regions. Best results in left or right regions.
			config: {
				colored: false,
				maximumNumberOfDays: 4,
				maximumEntries: 8,
				getRelative: 0,
				
				calendars: [
					{
						url: agendaUrl,
						symbol: 'calendar',						
					},
				],
			}
		},
		{
			module: "calendar",
			position: "top_left",	// This can be any of the regions. Best results in left or right regions.
			config: {
				colored: false,
				maximumNumberOfDays: 2,
				maximumEntries: 4,
				getRelative: 0,
				
				calendars: [
					{
						url: agendaUrl,					
					},
				],
			}
		},
		{
			"module": "MMM-Bordeaux-Transports",
			"position": "top_left",
			config: {
				homeLatitude: latitude,
				homeLongitude: longitude,
    			navitiaKey: navitiaKey,
    			password: navitiaPassword,
				googleMapKey: googleApiKey,
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Actualités",
						url: newsUrl,
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		
		{
		module: "MMM-kalliope",
		position: "bottom_bar",
		config: {
			title: "Kalliope"
			}
		}
		
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
