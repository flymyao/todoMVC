var fs = require('fs');

var routes = [];

module.exports = routes;

routes.push({
    method: 'GET',
    path:'/api/login',
    handler: {
        async: function* (request, reply) {
            var result = null;
            var file_name="././server/data/user.json";

            fs.readFile(file_name  ,function(err,data){
                if(data != null) {
                    arr_user = JSON.parse(data.toString());
                    for(var i=0; i<arr_user.length; i++){
                        if(request.query && request.query.username && request.query.password){
                            if(request.query.username == arr_user[i].username && request.query.password == arr_user[i].password){
                                result = arr_user[i];
                            }
                        }
                    }
                }
                reply({success: true,result:result});
            });
        }
    }
});

routes.push({
    method: 'GET',
    path:'/api/get-user',
    handler: {
        async: function* (request, reply) {
            var result = null;
            var file_name="././server/data/user.json";

            fs.readFile(file_name  ,function(err,data){
                if(data != null) {
                    arr_user = JSON.parse(data.toString());
                    for(var i=0; i<arr_user.length; i++){
                        if(request.query && request.query.username){
                            if(request.query.username == arr_user[i].username){
                                result = arr_user[i];
                            }
                        }else if(request.query && request.query.id){
                            if(request.query.id == arr_user[i].id){
                                result = arr_user[i];
                            }
                        }
                    }
                }
                reply({success: true,result:result});
            });
        }
    }
});