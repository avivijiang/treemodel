define(['vue', 'text!./vuedemo.html', 'jquery'], function (Vue, templateMarkup, $) {
    //create time:2016-12-28
    function VueModel(param) {
        var app = new Vue({
            el: '#app',
            data: {
                message: 'Hello Vue!'
            }
        })
    }
    VueModel.prototype.dispose = function () { };
    return { viewModel: VueModel, template: templateMarkup };
});