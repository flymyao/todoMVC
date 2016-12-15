var d = mvdom;
var app = app || {};

document.addEventListener("DOMContentLoaded", function(event) {
	var user = app.preference.get("todoUser");
	if(user){
		d.display("MainView", d.first("#appbody"));
	}else{
		d.display("LoginView", d.first("#appbody"));
	}
});