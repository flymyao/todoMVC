var d = mvdom;

var projectHub = d.hub("projectHub");
var _projects = [];
var app = app || {};

// Subcribe to a topic 
// sub(topic,[labels,] handlerFunction, namespace) 
projectHub.sub("Project", function (data, info) {
    console.log("topic: ", info.topic, ", label: ", info.label, ", data: ", data);
}, {ns: "namespace"});

// or can subscribe only to the create label (here info.label will always be "create") 
projectHub.sub("Project", "create", function (data, info) {
    data = data || {};
    return app.doPost("/project/create", {entity: JSON.stringify(data)});
});

// or can subscribe only to the delete label (here info.label will always be "delete")
projectHub.sub("Project", "delete", function (data, info) {
    return app.doPost("/project/delete", {id: data});
});

projectHub.sub("Project", "update", function (data, info) {
    data = data || {};
    return app.doPost("/project/update", {entity: JSON.stringify(data)});
});

projectHub.get = function (id) {
    return app.doGet("/project/get", {id: id});
}


projectHub.list = function () {
    return app.doGet("/project/list");
}


window.projectHub = projectHub;