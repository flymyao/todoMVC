var d = mvdom;
var app = app || {};

d.register("ProjectView",{
    create: function(data){
        var view = this;
        view._projectId = data.id;
        return render("ProjectView",data);
    },

    postDisplay: function(){
        var view = this;
        refreshTasks.call(view);
    },

    events: {
        "click; .add-task":function(){
            var view = this;
            $(d.first("#modal-add-task")).modal();
        },
        "click; .add-task-ok":function(){
            var view = this;
            var nameEl = d.first(view.el,"input.name");
            if(nameEl.value){
                taskHub.pub("Task", "create", {name: nameEl.value,projectId:view._projectId});
                nameEl.value = "";
                $(d.first("#modal-add-task")).modal("hide");
            }
        },
        "click; .item .delete":function(evt){
            var view = this;
            var targetEl = evt.target;
            var id = d.closest(targetEl, ".item").getAttribute("data-entity-id");
            taskHub.pub("Task", "delete", id);
        },
        "click; .edit-project":function(){
            var view = this;
            d.display("ProjectPopup", d.first("body"), {id: view._projectId});
        },
        "click; .edit-task":function(evt){
            var view = this;
            var targetEl = evt.target;
            var id = d.closest(targetEl, ".item").getAttribute("data-entity-id");
            d.display("TaskPopup", d.first("body"), {id:id});
        }
    },

    docEvents: {

    },
    winEvents:{

    },
    hubEvents: {
        "taskHub": {
            // subscribe on the dataServiceHub on the topic Task and any labels "create" "update" or "delete"
            "Task; create, delete ,update": function(data, info){
                var view = this; // the this is this view object
                console.log("Task has been " + info.label + "d");
                refreshTasks.call(view);
            }
        }
    }
});

function refreshTasks(){
    var view = this;
    var listEl = d.first(view.el,".task-list");
    taskHub.list(view._projectId).done(function(data){
        var html = render("List-tasks", {tasks: data});
        listEl.innerHTML = html;
    });
}

