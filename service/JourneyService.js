'use strict';


/**
 * Plan a journey
 * Plan a journey
 *
 * body Journey_search_body 
 * depStation Integer The ID of the departure station
 * arrStation Integer The ID of the arrival station
 * depTime String The preferred departure time
 * returns inline_response_201_1
 **/
exports.planJourney = function() {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

