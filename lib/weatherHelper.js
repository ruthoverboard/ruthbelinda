/**
 * Created by ruth on 29/09/16.
 */

var aws = require('aws-sdk');
var request = require('request');
var async = require('async');
require("string_format");
var lambda = new aws.Lambda({
    region: 'us-east-1'
});

module.exports.ruthWeatherSingle = function(ciudad, callback){
    request.get("http://api.openweathermap.org/data/2.5/weather?q={0}&appid=ea4dd97a55fefeb38dcd3364cbacfd74".format(ciudad), function (error, data) {
       if(error){
           callback(error)
       }
       else{
           var response = JSON.parse(data.body);
           var result = "El clima de {0} es de {1} grados kelvin".format(ciudad,response.main.temp);
           callback(null, result)
       }
    });
};

module.exports.ruthWeatherMultiple = function(ciudades, callback){

  var listaFunciones = ciudades.map(function(ciudad){
     return async.apply(invocarCiudad, ciudad);
  });
    async.parallel(listaFunciones, function (err, data) {
        if(err){
            callback(err);
        }
        else{
            callback(null, data);
        }
    });
}

function invocarCiudad (ciudad, callback){
    var params = {
        FunctionName: "ruth-sls-weatherRuth",
        InvocationType: "RequestResponse",
        Payload: JSON.stringify({"City": ciudad})
    };

    lambda.invoke(params, function(err, data){

        if(err){
            callback(err);
            console.log(err);
        }
        else{

            console.log(data);
            callback(null, data.Payload);
        }
    })
}