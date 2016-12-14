ko.components.register('m-table', {
    viewModel: function(params) {
        var self = this;
        //前台数据
        self.memberTable = ko.observableArray([]);
        //读取数据
        self.loadTableInfo = function() {
            $.each(params.showInfoModel.memberArray(), function(index, value) {
                self.memberTable.push(new MemberModel(value))
            });
        }
        self.loadTableInfo();
        function MemberModel(data) {
            var self = this;
            self.id = ko.observable(data.Id);
            self.superId = ko.observable(data.superId);
            self.name = ko.observable(data.name);
            self.remarks = ko.observable(data.remarks);
        }


    },
    template: '<table class="table table-striped">\
        <thead>\
            <tr>\
                <th>\
                    名称\
                </th>\
                <th>\
                    编号\
                </th>\
                <th>\
                    上级编号\
                </th>\
                <th>\
                    备注\
                </th>\
            </tr>\
        </thead>\
        <tbody data-bind="foreach:memberTable">\
            <tr>\
                <td data-bind="text:name"></td>\
                <td data-bind="text:id"></td>\
                <td data-bind="text:superId"></td>\
                <td data-bind="text:remarks"></td>\
            </tr>\
        </tbody>\
    </table>'
});

//传入数据模型
var momo = new showInfoModel();

function showInfoModel() {
    var self = this;
    self.url = 'showTable';
    self.pageIndex = 0;
    self.pageNum = 5;
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
}
 ko.applyBindings();