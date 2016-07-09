define([
    'underscore',
    'backbone'
], function(_, Backbone){
    var MyCity = Backbone.Model.extend({
        idAttribute: "_id"
    }); 
    return MyCity;  
});

