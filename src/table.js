function TableModel() {
    var self = this;
    //后台模拟数据
    self.memberArray = ko.observableArray([
        {
            "Id": 1,
            "superId": 0,
            "name": "校长",
            "remarks": null
        },
        {
            "Id": 2,
            "superId": 1,
            "name": "副校长",
            "remarks": null
        },
        {
            "Id": 3,
            "superId": 1,
            "name": "政教处主任",
            "remarks": null
        },
        {
            "Id": 4,
            "superId": 3,
            "name": "政教处副主任",
            "remarks": null
        },
        {
            "Id": 5,
            "superId": 1,
            "name": "年级主任",
            "remarks": null
        },
        {
            "Id": 6,
            "superId": 5,
            "name": "授课教师",
            "remarks": null
        },
        {
            "Id": 7,
            "superId": 6,
            "name": "学生",
            "remarks": null
        }
    ]);
    //前台数据
    self.memberTable = ko.observableArray([]);
    //读取数据
    self.loadTableInfo = function () {
        $.each(self.memberArray(), function (index, value) {
            self.memberTable.push(new MemberModel(value))
        });
    }
    self.loadTableInfo();
}
//成员模型
function MemberModel(data) {
    var self = this;
    self.id = ko.observable(data.Id);
    self.superId = ko.observable(data.superId);
    self.name = ko.observable(data.name);
    self.remarks = ko.observable(data.remarks);
}

ko.applyBindings(new TableModel());