const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5f6f60f76922b331f0d4d6888f841f6f&query=' + latitude + ',' + longitude
    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Check Your Internet Connection', undefined)
        } else if (body.error) {
            callback('Unable to find Location', undefined)
        }
        else {
            callback(undefined, body.current.weather_descriptions[0] + '. Temperature: ' + body.current.temperature + ' But Feels Like: ' + body.current.feelslike + ' Wind Speed: ' + body.current.wind_speed + ' Wind Dirction: ' + body.current.wind_dir + ' Humidity: ' + body.current.humidity)
        }
    })
}

module.exports = forecast