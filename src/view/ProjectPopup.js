var d = mvdom;

d.register("ProjectPopup", {
    // Returns a HTML String or a HTML Element
    // Must be one parent element
    create: function (data, config) {
        return render("ProjectPopup");
    },

    // (optional) postDisplay() will be called after the component element is added to the dom
    // and in another event (used a setTimeout 0).
    // Best Practice: This is a good place to add bindings that are not related to UI layout, or need to be done
    // after the component is displayed
    postDisplay: function (data, config) {
        var view = this;
        data = data || {};
        view.objId = data.id;
        projectHub.get(view.objId).done(function (result) {
            loadProject.call(view, result);
        });
    },

    events: {
        "click; .btn.save": function () {
            var view = this;
            projectHub.pub("Project", "update", getProjectData.call(view));
            d.remove(view.el);
            window.location.reload();
        },
        "click; .btn.cancel": function () {
            var view = this;
            d.remove(view.el);
        }
    }

});


function getProjectData() {
    var view = this;
    var props = {};
    props.id = view.objId;
    props.name = d.first(view.el, "input[name='name']").value;
    return props;
}

function loadProject(project) {
    var view = this;
    if (project.name) {
        d.first(view.el, "input[name='name']").value = project.name;
    }

    if (project.done) {
        d.first(view.el, "input[name='done']").checked = true;
    }
}