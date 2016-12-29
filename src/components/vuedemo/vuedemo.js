define(['vue', 'text!./vuedemo.html', 'jquery'], function (k, templateMarkup, $) {
    //create time:2016-12-28
    function VueModel(param) {

    }
    VueModel.prototype.dispose = function () { };
    return { viewModel: VueModel, template: templateMarkup };
});