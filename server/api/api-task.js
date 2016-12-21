var daos = require('../dao/daos.js');

var routes = [];

module.exports = routes;

routes.push({
    method: 'GET',
    path:'/task/list',
    handler: function (request, reply) {
        var tasktDao = daos.task;
        var projectId = request.query.projectId;
        var tasks = tasktDao.list();
        var result = [];
        for(var i = 0; i < tasks.length ; i++){
            if(tasks[i].projectId == projectId){
                result.push(tasks[i]);
            }
        }
        reply({success: true,result:result});
    }
});

routes.push({
    method: 'POST',
    path:'/task/create',
    handler: function (request, reply) {
        var tasktDao = daos.task;
        var entity = JSON.parse(request.payload.entity);
        var entityId = tasktDao.create(entity);
        reply({success: true,result: entityId});
    }
});

routes.push({
    method: 'POST',
    path:'/task/delete',
    handler: function (request, reply) {
        var tasktDao = daos.task;
        var entityId = tasktDao.delete(request.payload.id);
        reply({success: true,result: entityId});
    }
});

routes.push({
    method: 'GET',
    path: '/task/get',
    handler: function (request, reply) {
        var taskDao = daos.task;
        var entity = taskDao.get(parseInt(request.url.query.id));
        reply({success: true,result:entity});
    }
});

routes.push({
    method: 'POST',
    path:'/task/update',
    handler: function (request, reply) {
        var taskDao = daos.task;
        var entity = JSON.parse(request.payload.entity);
        var entityId = taskDao.update(entity);
        reply({success: true,result:entityId});
    }
});