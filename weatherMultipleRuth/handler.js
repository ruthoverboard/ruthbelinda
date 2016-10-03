'use strict';
var weather = require('../lib/weatherHelper');

module.exports.handler = function(event, context, cb) {
  weather.ruthWeatherMultiple (event.Cities, function(err, data){
    cb(null, data);
  });
};
