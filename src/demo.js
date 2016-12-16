$(function () {

    var tableMetaData = [{
        text: '姓名',
        fieldName: 'name',
        index: 0
    }, {
        text: '编号',
        fieldName: 'id',
        index: 1
    }];
    var sList = [];
    var list = [];
    function aList(a) {
        return a;
    };
    var resultObj = {};
    function oobj(a, b) {
        var self = this;
        self.name = a
        self.value = b;
    }
    $.each(tableMetaData, function (index, item) {
        // console.log(item);

        $.each(item, function (objkey, objvalue) {
            list.push(new oobj(objkey, objvalue));
            //resultObj[objvalue] = objkey;
        })
        sList.push(new aList(list));
        list = [];
    });
    console.log(sList);


});