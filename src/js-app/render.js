// --------- Render --------- //
// Just a little indirection to render a template using handlebars.
// This simple indirection allows much flexibility later one, 
// when using pre-compiling or other templating engine are needed.

// The node.js hbsp process will put the precompile function in the Handlebars.templates
Handlebars.templates = Handlebars.templates || {};

document.addEventListener("DOMContentLoaded", function(event) {
	// Make all templates partials (no reason why they should not)
	// Note: We put this in a DOMContentLoaded to make sure the Handlebars.templates where loaded (as they should be loaded
	//	     in the head). 
	//       This assumes the "templates.js" is loaded in the <head></head> (which is the case in our best practice)
	Handlebars.partials =  Handlebars.templates;	
});

// Global scope is acceptable for this very generic function (could be namespaced if it is the developer preference)
function render(templateName,data){
	var tmpl = Handlebars.templates[templateName];

	// if not found, throw an error
	if (!tmpl){
		throw "Not template found in pre-compiled and in DOM for " + templateName;
	}

	// call the function and return the result
	return tmpl(data);
}

// make it global
window.render = render;
// --------- /Render --------- //