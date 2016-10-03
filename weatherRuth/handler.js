'use strict';
var weather = require('../lib/weatherHelper');

module.exports.handler = function(event, context, cb) {
  weather.ruthWeatherSingle(event.City, function(err, data){
    cb(null, data);
  });

};
