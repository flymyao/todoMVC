var d = mvdom;
var app = app || {};

d.register("MainView",{
	create: function(){
		return render("MainView");
	},

	postDisplay: function(){
		var view = this;
		view.$contentPanel = d.first(".MainView-content");
		view.$navHeader = d.first("header");
		var user = JSON.parse(app.preference.get("user"));
		d.push(view.$navHeader,user);
	},

	events: {
		"click; .do-logoff":function(){
			var view = this;
			app.preference.store("user",null);
			window.location.reload();
		}
	},

	docEvents: {

	},
	winEvents:{

	},
	hubEvents: {

	}
});