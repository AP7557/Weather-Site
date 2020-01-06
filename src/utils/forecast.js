const request = require("request");
const forecast = (latitude, longitude, callback) => {
	const url =
		"https://api.darksky.net/forecast/debb9ed998edc6581b81bdf5d686105d/" +
		latitude +
		"," +
		longitude;

	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback("Unable to connect to weather services!", undefined);
		} else if (body.error) {
			callback("Unable to find location", undefined);
		} else {
			callback(
				undefined,
				body.daily.data[0].summary +
					" Currently it is " +
					body.currently.temperature +
					" degrees. High of " +
					body.daily.data[0].temperatureHigh +
					" degrees and a Low of " +
					body.daily.data[0].temperatureHigh +
					" degrees. Chance of Rain " +
					body.currently.precipProbability +
					"%. Wind speed at " +
					body.currently.windSpeed
			);
		}
	});
};

module.exports = forecast;
