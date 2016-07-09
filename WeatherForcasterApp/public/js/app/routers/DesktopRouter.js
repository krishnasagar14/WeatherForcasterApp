define([
    "jquery",
    "backbone",
    "views/desktopViews/AppsEntryPage"
],
    function($, Backbone, AppsEntryPageView) {
        var DesktopRouter = Backbone.Router.extend({
            initialize: function() {
                Backbone.history.start();
            },
            routes: {
                "" :       "appsEntry"
            },
            appsEntry: function(){
                new AppsEntryPageView().render();
            }
        });
        return DesktopRouter;
    }
);
