var d = mvdom;

d.register("MainView",{
	create: function(){
		return render("MainView");
	},

	postDisplay: function(){
		var view = this;
	},

	events: {
		"click; .add-project":function(){
			var view = this;
			$(d.first("#modal-add-project")).modal();
		},
		"click; .add-ok":function(){
			var view = this;
			var nameEl = d.first(view.el,"input.name");
			if(nameEl.value){
				projectHub.pub("Project", "create", {name: nameEl.value});
				nameEl.value = "";
				$(d.first("#modal-add-project")).modal("hide");
			}
		},
		"click; .item .delete":function(evt){
			var view = this;
			var targetEl = evt.target;
			var id = d.closest(targetEl, ".item").getAttribute("data-entity-id");
			projectHub.pub("Project", "delete", id);
		}
	},

	docEvents: {

	},
	winEvents:{

	},
	hubEvents: {
		"projectHub": {
			// subscribe on the dataServiceHub on the topic Task and any labels "create" "update" or "delete"
			"Project; create, delete": function(data, info){
				var view = this; // the this is this view object
				console.log("Project has been " + info.label + "d");
				refreshItems.call(view);
			}
		}
	}
});

function refreshItems(){
	var view = this;
	var listEl = d.first(view.el,".project-list");
	var data = projectHub.getData();
	var html = render("List-items", {projects: data});
	listEl.innerHTML = html;
}

