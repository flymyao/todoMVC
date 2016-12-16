var daos = require('../dao/daos.js');

var routes = [];

module.exports = routes;

routes.push({
    method: 'GET',
    path:'/project/list',
    handler: function (request, reply) {
        var projectDao = daos.project;
        reply({success: true,result:projectDao.list()});
    }
});

routes.push({
    method: 'POST',
    path:'/project/create',
    handler: function (request, reply) {
        var projectDao = daos.project;
        var entity = JSON.parse(request.payload.entity);
        var entityId = projectDao.create(entity);
        reply({success: true,result: entityId});
    }
});

routes.push({
    method: 'POST',
    path:'/project/delete',
    handler: function (request, reply) {
        var projectDao = daos.project;
        var entityId = projectDao.delete(request.payload.id);
        reply({success: true,result: entityId});
    }
});
