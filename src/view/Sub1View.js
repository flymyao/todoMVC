var d = mvdom;

d.register("Sub1View",{parent:".content",emptyParent:true},{
    create : function() {
        return render("Sub1View");
    },
    postDisplay : function() {
        var view = this;
    }
});