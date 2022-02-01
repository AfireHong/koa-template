"use strict";
const user = require("./user");
const admin = require("./admin");
module.exports = function (app) {
  app.use(user.routes());
  app.use(admin.routes());
};
