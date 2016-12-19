var d = mvdom;

var taskHub = d.hub("taskHub");
var app = app || {};

// Subcribe to a topic 
// sub(topic,[labels,] handlerFunction, namespace) 
taskHub.sub("Task",function(data, info){
    console.log("topic: ", info.topic, ", label: ", info.label, ", data: ", data);
},{ns:"namespace"});

// or can subscribe only to the create label (here info.label will always be "create") 
taskHub.sub("Task", "create", function(data, info){
	data = data || {};
	return app.doPost("/task/create", {entity: JSON.stringify(data)});
});

// or can subscribe only to the delete label (here info.label will always be "delete")
taskHub.sub("Task", "delete", function(data, info){
	return app.doPost("/task/delete", {id: data});
});

taskHub.list =  function(projectId){
	return app.doGet("/task/list",{projectId:projectId});
}


window.taskHub = taskHub;