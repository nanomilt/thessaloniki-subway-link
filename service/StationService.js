'use strict';


/**
 * Return the arrivals of an existing station
 * Return the arrivals of an existing station
 *
 * stationId Integer The ID of the station
 * returns List
 **/
exports.getStationArrivals = function() {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = [ "00-02", "00-09" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Return the connections of an existing station
 * Return the connections of an existing station
 *
 * stationId Integer The ID of the station
 * returns List
 **/
exports.getStationConnections = function() {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = [ {
  "live-tracking" : [ "40.6297373", "22.9579498" ],
  "name" : "Blue Line",
  "stations" : [ "Venizelou", "Venizelou" ],
  "is-favorite" : false,
  "stations-map" : "BlueLine.png",
  "line-id" : 1,
  "timetable" : [ [ "10:00", "10:30" ], [ "10:10", "10:20" ] ]
}, {
  "live-tracking" : [ "40.6297373", "22.9579498" ],
  "name" : "Blue Line",
  "stations" : [ "Venizelou", "Venizelou" ],
  "is-favorite" : false,
  "stations-map" : "BlueLine.png",
  "line-id" : 1,
  "timetable" : [ [ "10:00", "10:30" ], [ "10:10", "10:20" ] ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Return an existing station
 * Return an existing station
 *
 * stationId Integer 
 * returns inline_response_201
 **/
exports.getStationEntity = function() {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
  "eta" : [ "00-02", "00-09" ],
  "station-id" : 0,
  "name" : "Venizelou",
  "position" : [ "40.6370981", "22.9392805" ],
  "is-favorite" : false,
  "lines" : [ {
    "live-tracking" : [ "40.6297373", "22.9579498" ],
    "name" : "Blue Line",
    "stations" : [ "Venizelou", "Venizelou" ],
    "is-favorite" : false,
    "stations-map" : "BlueLine.png",
    "line-id" : 1,
    "timetable" : [ [ "10:00", "10:30" ], [ "10:10", "10:20" ] ]
  }, {
    "live-tracking" : [ "40.6297373", "22.9579498" ],
    "name" : "Blue Line",
    "stations" : [ "Venizelou", "Venizelou" ],
    "is-favorite" : false,
    "stations-map" : "BlueLine.png",
    "line-id" : 1,
    "timetable" : [ [ "10:00", "10:30" ], [ "10:10", "10:20" ] ]
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Edit an existing station
 * Edit an existing station
 *
 * body Station_stationid_body 
 * stationId Integer The ID of the station to be modified
 * returns inline_response_201
 **/
exports.setStationAttributes = function() {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
  "eta" : [ "00-02", "00-09" ],
  "station-id" : 0,
  "name" : "Venizelou",
  "position" : [ "40.6370981", "22.9392805" ],
  "is-favorite" : false,
  "lines" : [ {
    "live-tracking" : [ "40.6297373", "22.9579498" ],
    "name" : "Blue Line",
    "stations" : [ "Venizelou", "Venizelou" ],
    "is-favorite" : false,
    "stations-map" : "BlueLine.png",
    "line-id" : 1,
    "timetable" : [ [ "10:00", "10:30" ], [ "10:10", "10:20" ] ]
  }, {
    "live-tracking" : [ "40.6297373", "22.9579498" ],
    "name" : "Blue Line",
    "stations" : [ "Venizelou", "Venizelou" ],
    "is-favorite" : false,
    "stations-map" : "BlueLine.png",
    "line-id" : 1,
    "timetable" : [ [ "10:00", "10:30" ], [ "10:10", "10:20" ] ]
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new station
 * Create a new station
 *
 * body Station_body 
 * returns inline_response_201
 **/
exports.stationEntity = function() {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
  "eta" : [ "00-02", "00-09" ],
  "station-id" : 0,
  "name" : "Venizelou",
  "position" : [ "40.6370981", "22.9392805" ],
  "is-favorite" : false,
  "lines" : [ {
    "live-tracking" : [ "40.6297373", "22.9579498" ],
    "name" : "Blue Line",
    "stations" : [ "Venizelou", "Venizelou" ],
    "is-favorite" : false,
    "stations-map" : "BlueLine.png",
    "line-id" : 1,
    "timetable" : [ [ "10:00", "10:30" ], [ "10:10", "10:20" ] ]
  }, {
    "live-tracking" : [ "40.6297373", "22.9579498" ],
    "name" : "Blue Line",
    "stations" : [ "Venizelou", "Venizelou" ],
    "is-favorite" : false,
    "stations-map" : "BlueLine.png",
    "line-id" : 1,
    "timetable" : [ [ "10:00", "10:30" ], [ "10:10", "10:20" ] ]
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete an existing station
 * Delete an existing station
 *
 * stationId Integer The ID of the station to be deleted
 * returns inline_response_201
 **/
exports.deleteStationEntity = function() {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
  "eta" : [ "00-02", "00-09" ],
  "station-id" : 0,
  "name" : "Venizelou",
  "position" : [ "40.6370981", "22.9392805" ],
  "is-favorite" : false,
  "lines" : [ {
    "live-tracking" : [ "40.6297373", "22.9579498" ],
    "name" : "Blue Line",
    "stations" : [ "Venizelou", "Venizelou" ],
    "is-favorite" : false,
    "stations-map" : "BlueLine.png",
    "line-id" : 1,
    "timetable" : [ [ "10:00", "10:30" ], [ "10:10", "10:20" ] ]
  }, {
    "live-tracking" : [ "40.6297373", "22.9579498" ],
    "name" : "Blue Line",
    "stations" : [ "Venizelou", "Venizelou" ],
    "is-favorite" : false,
    "stations-map" : "BlueLine.png",
    "line-id" : 1,
    "timetable" : [ [ "10:00", "10:30" ], [ "10:10", "10:20" ] ]
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

