'use strict';
var BaseDao = require("./BaseDao.js");

module.exports = {
    BaseDao: BaseDao,
    project: new BaseDao("project")
};
