var d = mvdom;

d.register("MainView",{
	create: function(){
		return render("MainView");
	},

	postDisplay: function(){
		var view = this;
	},

	events: {
	},

	docEvents: {

	},
	winEvents:{
		"hashchange":function(){
			var view = this;
			var hash = getSection.call(view);
			showView.call(view, hash);
		}
	},
	hubEvents: {
	}
});

function getSection(){
	var view = this;
	var hash = window.location.hash;
	if(hash.startsWith("#") > -1){
		hash = hash.substring(1);
	}

	var $nav = view.$el.find(".nav.navbar-nav");
	$nav.find("li").removeClass("active");
	$nav.find("li a[href='#"+hash+"']").closest("li").addClass("active");
	return hash;
}

function showView(section){
	var view = this;alert(section)
	if(section == "sub1"){
		b.display("Sub1View");
	}else if(section == "sub2"){
		b.display("Sub2View");
	}else{
		b.display("Sub1View");
	}
}
