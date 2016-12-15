var d = mvdom;

d.register("LoginView",{
    create: function(){
        return render("LoginView");
    },

    postDisplay: function(){
        var view = this;
    },

    events: {
        "click; .do-login":function(){
            var user = d.pull(d.first(".LoginView"))
            app.doGet("/api/login",user).done(function(data){
                if(data){
                    app.preference.store("user",JSON.stringify(user));
                    window.location.reload();
                }
            });
        }
    },

    docEvents: {

    },
    winEvents:{

    },
    hubEvents: {
    }
});


