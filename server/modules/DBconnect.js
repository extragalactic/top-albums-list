// ---------------------------------------------------
// Module to handle communication to MongoDB database
//
// db name: 'edmDistrictData'
// collection name: 'albums'
// fields: AlbumName, NumberPlays
//
// ---------------------------------------------------
"use strict";

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/edmDistrictData';

var connectedDB = null;

// ---------------------------------------------------
// Connect to database
// ---------------------------------------------------
MongoClient.connect(url, function(err, db) {
  connectedDB = db;
  assert.equal(null, err);
  console.log("Connected correctly to database.");
});

// ---------------------------------------------------
// Get album list from database
// ---------------------------------------------------
exports.getTopAlbums = function(numAlbums, callback) {
   var findParam = {};
   var returnData = [];

   // Request album list from MongoDB, with a descending sort of results by the NumberPlays field, and limiting the number of results returned according to the numAlbums parameter
   console.log('Finding top ' + numAlbums + ' albums...');
   var cursor = connectedDB.collection('albums').find().sort({'NumberPlays':-1}).limit(numAlbums);

   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc !== null) {
         returnData.push(doc);
      } else {
         console.log('end of db read');
         callback(returnData);
      }
   });
};
