//define db config & mongoose libraries
const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.eventsManagementTemplate = require("./eventsmanagement.template.model.js")(mongoose);

module.exports = db;