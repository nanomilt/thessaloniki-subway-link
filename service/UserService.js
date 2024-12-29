'use strict';


/**
 * Return the profile of the user
 * Given the signed in user''s ID, return their profile attributes
 *
 * userId Integer The ID of the user
 * returns signup_body
 **/
exports.getUserEntity = function() {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
  "is-guest" : false,
  "password" : "SoftEng2024!",
  "user-id" : 4221,
  "email" : "klpanagi@ece.auth.gr",
  "username" : "klpanagi"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Sign-in to the system
 * Enter the system as a registered user
 *
 * body Login_body 
 * returns login_body
 **/
exports.login = function() {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
  "is-guest" : false,
  "password" : "SoftEng2024!",
  "user-id" : 4221,
  "email" : "klpanagi@ece.auth.gr",
  "username" : "klpanagi"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Edit the profile of the user
 * Edit the user''s attributes.
 *
 * body Userid_profile_body 
 * userId Integer The ID of the user to be modified
 * returns userid_profile_body
 **/
exports.setUserAttributes = function() {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
  "is-guest" : false,
  "password" : "SoftEng2024!",
  "user-id" : 4221,
  "email" : "klpanagi@ece.auth.gr",
  "username" : "klpanagi"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Register to the system
 * By providing a username, a password, and an email, register to the system
 *
 * body Signup_body 
 * returns signup_body
 **/
exports.signup = function() {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
  "is-guest" : false,
  "password" : "SoftEng2024!",
  "user-id" : 4221,
  "email" : "klpanagi@ece.auth.gr",
  "username" : "klpanagi"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

