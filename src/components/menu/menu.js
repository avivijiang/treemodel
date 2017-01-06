define(['knockout', 'text!./menu.html', 'jquery'], function (ko, templateMarkup, $) {
    //create time:2017-01-06
    function menuModel(param) {

    }
    menuModel.prototype.dispose = function () { };
    return { viewModel: menuModel, template: templateMarkup };
});