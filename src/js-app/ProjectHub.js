var d = mvdom;

var projectHub = d.hub("projectHub");
var _projects = [];
var _id = 1;

// Subcribe to a topic 
// sub(topic,[labels,] handlerFunction, namespace) 
projectHub.sub("Project",function(data, info){
    console.log("topic: ", info.topic, ", label: ", info.label, ", data: ", data);
},{ns:"namespace"});

// or can subscribe only to the create label (here info.label will always be "create") 
projectHub.sub("Project", "create", function(data, info){
	data.id = getSeq();
	_projects.push(data);
});

// or can subscribe only to the delete label (here info.label will always be "delete")
projectHub.sub("Project", "delete", function(data, info){
	var id = data;
	if(id){
		for(var i = 0; i < _projects.length; i++){
			if(_projects[i].id == id){
				_projects.splice(i, 1);
			}
		}
	}
});

projectHub.getData = function(){
	return _projects;
}

function getSeq(){
	return _id++;
}


window.projectHub = projectHub;