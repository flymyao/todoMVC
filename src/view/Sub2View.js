var d = mvdom;

d.register("Sub2View",{parent:".content",emptyParent:true},{
    create : function() {
        return render("Sub2View");
    },
    postDisplay : function() {
        var view = this;
    }
});
