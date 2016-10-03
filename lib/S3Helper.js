/**
 * Created by ruth on 8/09/16.
 */
var AWS = require("aws-sdk");
var s3 = new AWS.S3();
var fs = require('fs');

module.exports.listBucketObjects = function(bucket, callback){
  var params = {
        Bucket: bucket
  };
  console.log(bucket);

  s3.listObjectsV2(params, function(error, data){
     if(error){
         callback(error);
     }
     else{
         var fileNames = data.Contents.map(function(object) {
             return object.Key;
         });
         console.log(fileNames);
         callback(null, fileNames);
     }
  });
};

module.exports.saveInS3 = function(bucket, key, content, callback){
    var params = {
        Bucket: bucket,
        Key: key,
        Body: content,
        ACL: "public-read",
        Metadata: {Move: "true"} //metadata
    };

    s3.upload(params, function(error, data){
        if(error){
            callback(error);
        }
        else{
            callback(null, data);
        }
    });
};

module.exports.downloadPhoto = function(bucket, key, stream){

    var params = {
        Bucket: 'ruthbelinda',
        Key: 'Firenze.JPG'
    };

    var file = fs.createWriteStream(stream);
    s3.getObject(params).createReadStream().pipe(file);
};

module.exports.readFromS3 = function(bucket, key, callback){
    var params = {
        Bucket: bucket,
        Key: key
    };

    s3.getObject(params, function(error, data){
        if(error){
            callback(error);
        }
        else{
            callback(null, data);
        }
    });
};