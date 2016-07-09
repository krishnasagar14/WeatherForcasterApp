define([
    'underscore',
    'backbone'
], function(_, Backbone){
    var City = Backbone.Model.extend({
        idAttribute: "_id"
    }); 
    return City;
});

