'use strict';


/**
 * Return an existing line
 * Return an existing line
 *
 * lineId Integer 
 * returns line_body
 **/
exports.getLineEntity = function() {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
  "live-tracking" : [ "40.6297373", "22.9579498" ],
  "name" : "Blue Line",
  "stations" : [ "Venizelou", "Venizelou" ],
  "is-favorite" : false,
  "stations-map" : "BlueLine.png",
  "line-id" : 1,
  "timetable" : [ [ "10:00", "10:30" ], [ "10:10", "10:20" ] ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Return the live position of railcars for a specific line
 * Return the live position of railcars for a specific line
 *
 * lineId Integer The ID of the line
 * returns List
 **/
exports.getLineLiveTracking = function() {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = [ "40.6297373", "22.9579498" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Return the stations of an existing line
 * Return the stations of an existing line
 *
 * lineId Integer The ID of the line
 * returns List
 **/
exports.getLineStations = function() {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = [ "Venizelou", "Venizelou" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Return the stations'' map for a line
 * Return the stations'' map for a line
 *
 * lineId Integer The ID of the line
 * returns List
 **/
exports.getLineStationsMap = function() {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = "BlueLine.png";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Return the timetable of an existing line
 * Return the timetable of an existing line
 *
 * lineId Integer The ID of the line
 * returns List
 **/
exports.getLineTimetable = function() {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = [ [ "10:00", "10:30" ], [ "10:10", "10:20" ] ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new line
 * Create a new line
 *
 * body Line_body 
 * returns line_body
 **/
exports.lineEntity = function() {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
  "live-tracking" : [ "40.6297373", "22.9579498" ],
  "name" : "Blue Line",
  "stations" : [ "Venizelou", "Venizelou" ],
  "is-favorite" : false,
  "stations-map" : "BlueLine.png",
  "line-id" : 1,
  "timetable" : [ [ "10:00", "10:30" ], [ "10:10", "10:20" ] ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Edit an existing line
 * Edit an existing line
 *
 * body Line_lineid_body 
 * lineId Integer The ID of the line to be modified
 * returns line_lineid_body
 **/
exports.setLineAttributes = function() {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
  "live-tracking" : [ "40.6297373", "22.9579498" ],
  "name" : "Blue Line",
  "stations" : [ "Venizelou", "Venizelou" ],
  "is-favorite" : false,
  "stations-map" : "BlueLine.png",
  "line-id" : 1,
  "timetable" : [ [ "10:00", "10:30" ], [ "10:10", "10:20" ] ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete an existing line
 * Delete an existing line
 *
 * lineId Integer The ID of the line to be deleted
 * returns line_lineid_body
 **/
exports.deleteLineEntity = function() {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
  "live-tracking" : [ "40.6297373", "22.9579498" ],
  "name" : "Blue Line",
  "stations" : [ "Venizelou", "Venizelou" ],
  "is-favorite" : false,
  "stations-map" : "BlueLine.png",
  "line-id" : 1,
  "timetable" : [ [ "10:00", "10:30" ], [ "10:10", "10:20" ] ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

