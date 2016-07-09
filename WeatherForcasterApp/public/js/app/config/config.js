require.config({
    baseUrl: "./js/app",
    paths: {
        "jquery": "../libs/jquery",
        "underscore": "../libs/lodash",
        "backbone": "../libs/backbone",
        "text": "../libs/plugins/text",
        "jasminejquery": "../libs/plugins/jasmine-jquery",
    },

    shim: {
        "backbone": {
            "deps": ["underscore", "jquery"],
            "exports": "Backbone"
        },
        "jasminejquery": ["jquery"]
    }
});
