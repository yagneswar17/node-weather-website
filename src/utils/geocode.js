const request = require('request')

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoieWFnbmVzd2FyYSIsImEiOiJja29sam9nM2Mwa2N2MnVvNnh0Yjc2cjAyIn0.zhlzfp6qIM8nQjTSfe-lUA&limit=0'
    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Check Your Internet Connection', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find Location', undefined)
        }
        else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geoCode