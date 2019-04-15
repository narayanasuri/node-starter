const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/21801e2a2ef3fa95f1d610e4e5477d51/' + lat + ',' + long;

    request( { url, json : true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to forecast service! :(', undefined);
        } else if (body.error) {
            callback('Unable to find location! :(', undefined)
        } else {
            callback(undefined, {
                temperature : body.currently.temperature,
                summary : body.currently.summary,
                precipitation : body.currently.precipProbability
            });
        }
    });
};

module.exports = forecast;