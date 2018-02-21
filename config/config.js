/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

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
			module: 'MMM-Remote-Control'
			// uncomment the following line to show the URL of the remote control on the mirror
			// , position: 'bottom_left'
			// acces via :  (si miroir sur la machine, autrement remplacer localhost par l'ip locale de la machine
		    // où le miroir est hébergé)http://localhost:8080/remote.html#main-menu
		},
		{
			module: "clock",
			position: "top_left",
			displaySeconds: false
		},
		{
			module: "MMM-GoogleMapsTraffic",
			position: "top_left",
			config: {
				key: "AIzaSyAJBhHndeTY8QMGOq9zs77R0f17blLGYH8",
				lat: 44.8167,
				lng: -0.6,
				height: "200px",
				width: "200px",
				zoom: 12
			}
		},
		{
			module: 'MMM-forecast-io',
			position: 'top_right',  // This can be any of the regions.
			config: {
				// See 'Configuration options' for more information.
				apiKey: '81112327c2b317864db2493852aee021', // Dark Sky API key.
				// Only required if geolocation doesn't work:
				latitude: 44.8167,
				longitude: -0.6,
				showForecast: true,
				maxDaysForecast: 1,
				enablePrecipitationGraph: true,
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
			module: "calendar",
			header: "Agenda",
			position: "top_left",
			config: {
				calendars: [
					{
						maximumNumberOfDays: 2,
						maximumEntries: 5, // Total Maximum Entries
						symbol: "calendar-check-o ",
						url: "https://ade.bordeaux-inp.fr/jsp/custom/modules/plannings/anonymous_cal.jsp?resources=3397&projectId=11&calType=ical&firstDate=2017-09-04&lastDate=2018-02-23#&login",
					}
				]
			}
		},
		// {
		// 	module: "compliments",
		// 	position: "lower_third"
		// },
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "BFM",
						url: "http://www.bfmtv.com/rss/info/flux-rss/flux-toutes-les-actualites/"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},


		{
			module: "MMM-voice",
			position: "bottom_right",
			config: {
				microphone: 1,
				language: "fr"
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
