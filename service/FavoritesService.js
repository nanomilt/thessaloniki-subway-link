'use strict';


/**
 * Remove a line or station from favorites
 * Remove a line or station from favorites
 *
 * userId Integer The ID of the user
 * returns inline_response_200_2
 **/
exports.userUser_idFavoritesDELETE = function() {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
  "stationsNlines" : [ "", "" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

