// require.js looks for the following global when initializing
var require = {
    baseUrl: ".",
    paths: {
        "bootstrap" :"bower_modules/bootstrap/dist/js/bootstrap.min",
        "bootstrap-checkbox" :"bower_modules/bootstrap-checkbox/dist/js/bootstrap-checkbox.min",
        "bootstrap-datepicker":"bower_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker",
        "crossroads": "bower_modules/crossroads/dist/crossroads.min",
        "hasher": "bower_modules/hasher/dist/js/hasher.min",
        "jquery": "bower_modules/jquery/dist/jquery",
        "knockout": "bower_modules/knockout/dist/knockout.debug",
        "knockout-projections": "bower_modules/knockout-projections/dist/knockout-projections",
        "signals": "bower_modules/js-signals/dist/signals.min",
        "text": "bower_modules/requirejs-text/text",
        "select2": "bower_modules/select2/dist/js/select2.full",
        'css': 'bower_modules/require-css/css',
        'validate': "bower_modules/validate/validate",
        'moment':"bower_modules/moment/moment",
        'autocomplete':"bower_modules/EasyAutocomplete/dist/jquery.easy-autocomplete"
    },
    shim: {
        "bootstrap": { deps: ["jquery"] },
        "select2": { deps: ["jquery", "css!bower_modules/select2/dist/css/select2"] },
        "validate": { deps: ['jquery']},
        "bootstrap-checkbox":{ deps: ['jquery']},
        "bootstrap-datepicker":{ deps: ['jquery']},
        "autocomplete":{ deps: ['jquery']}
    }
};
