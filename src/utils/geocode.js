const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoibmFyYXlhbmFzdXJpIiwiYSI6ImNqdGQ5eXhwcTEyaWk0YXA4dDNhY3dmM2IifQ.WQ6dZB7-1Q_2amM3NJ4TkA';

    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to Mapbox API :(', undefined);
        } else if(body.features.length === 0) {
            callback('Location not found :(', undefined);
        } else {
            callback(undefined, {
                location : body.features[0].place_name,
                latitude : body.features[0].center[1],
                longitude : body.features[0].center[0]
            });
        }
    });
}

module.exports = geocode;