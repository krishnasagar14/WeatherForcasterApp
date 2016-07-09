define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/desktopTemplates/appsEntryView.html',
    'text!templates/desktopTemplates/cityWeatherView.html',
    'models/city',
    'models/mycity'
], function($, _, Backbone, appsEntryTemplate, cityWeatherTemplate, city, mycity){
    var AppsEntryView = Backbone.View.extend({
        el: $('body'),
        initialize: function (){},
        render: function(){
            $(this.el).html(_.template( appsEntryTemplate, {}));
        },
        events:{
            'click #ShowWetherInfo'     : 'showCityData',
            'click #CityOptions option' : 'HideErrorMsg',
            'click #MycityWeather'      : 'getLocation'
        },
        getLocation: function () {
            var that=this;
            $(".weatherInfoContainer").html("");
            $(".tag").remove();
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var mycityData = new mycity();
                    mycityData.fetch({
                        url: "http://api.openweathermap.org/data/2.5/forecast/daily?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&APPID=125bd786b16ae0a3dc9e129385a8c591&cnt=14"/*+"mode=json"*/,
                        success: function() { 
                            $(".weatherInfoContainer").append(_.template(cityWeatherTemplate, {data:mycityData.toJSON()}));
                        }
                    });
                });
            } else { 
                alert("Geolocation is not supported by this browser.");
            }
        },
        showCityData: function () {
            var city_names = $(".tag span").text().split(/\s+/)
            var that = this;
            $(".weatherInfoContainer").html("");
            if($(".tagsinput > .tag").length === 0){
                $(".CitySelectionErr").show();
            }else{
                $(".CitySelectionErr").hide();
            }
            this.cityData = new city();
            city_names.pop();
            $.each(city_names,function(i,city_name){
                that.cityData.fetch({
                    url: "http://api.openweathermap.org/data/2.5/forecast/daily?q="+ city_name +"&cnt=14&APPID=125bd786b16ae0a3dc9e129385a8c591",
                    success: function() { 
                        $(".weatherInfoContainer").append(_.template(cityWeatherTemplate, {data:that.cityData.toJSON()}));
                    }
                });
            });
        }
    });
    return AppsEntryView;
});
