define(['knockout', 'text!./table.html', 'jquery'], function (ko, templateMarkup, $) {
    //create time:2016-12-20
    function tableViewModel(params) {

        var self = this;
        //前台数据
        //数据模型数组
        // self.memberTable = ko.observableArray([]);
        //标题数组
        self.column = ko.observableArray([]);
        //数组处理1
        self.memList = [];
        //数组处理寄存器
        self.contentList = [];
        self.listA = [];
        self.showList = ko.observableArray([]);
        self.copyshowList = [];
        //翻页信息
        self.pageIndex = ko.observable(0);
        self.pageSize = ko.observable();
        self.pageNum = ko.observable();
        self.memNum = ko.observable();
        self.goPage = ko.observable(1);
        self.firstPage = ko.observable(0);
        self.selectPage = ko.observableArray([]);
        //更改页面大小
        self.chosenSize = ko.observableArray([]);
        self.chosenS = ko.observable();
        //搜索信息
        self.searchM = ko.observable();
        //分页方法
        self.lastPage = function () {
            self.pageIndex(self.pageIndex()--);
            self.loadTableInfo(self.pageIndex());
        }
        self.nextPage = function () {
            self.pageIndex(self.pageIndex()++);
            self.loadTableInfo(self.pageIndex());
        }
        self.turnToPage = function () {
            self.pageIndex(self.goPage() - 1);
            self.loadTableInfo(self.pageIndex());
        }
        //更改页面大小
        self.setSize = function () {
            //加入更该页面大小方法
        }
        //搜索算法
        self.search = function () {
            if (self.searchM() == '' || self.searchM() == null) {
                self.showList(self.copyshowList);
            } else {
                self.showList([]);
                for (var i = 0; i < self.copyshowList.length; i++) {
                    for (var j = 0; j < self.copyshowList[i].length; j++) {
                        if (typeof self.copyshowList[i][j] == 'string') {
                            if (self.copyshowList[i][j].indexOf(self.searchM()) != -1) {
                                self.showList.push(self.copyshowList[i]);
                            }
                        }else if(typeof self.copyshowList[i][j] == 'number') {
                            if (self.copyshowList[i][j].toString().indexOf(self.searchM()) != -1) {
                                self.showList.push(self.copyshowList[i]);
                            }
                        }
                    }
                }
            }
        }
        //排序算法
        self.sort = function (index) {
            var q;
            for (var i = 0; i < self.column().length; i++) {
                if (self.column()[i].fieldName == index.fieldName) {
                    q = i;
                }
            }
            self.listA = self.showList();
            if (self.column()[q].sortUp() == false) {
                if (typeof self.listA[0][q] == 'number') {
                    self.listA.sort(function (a, b) {
                        console.log(typeof a[q]);
                        return a[q] - b[q];
                    });
                } else if (typeof self.listA[0][q] == 'string') {
                    self.listA.sort();
                }
                for (var i = 0; i < self.column().length; i++) {
                    self.column()[i].sortUp(0);
                }
                self.column()[q].sortUp(true);
            } else {
                if (typeof self.listA[0][q] == 'number') {
                    self.listA.sort(function (a, b) {
                        return b[q] - a[q];
                    });
                } else if (typeof self.listA[0][q] == 'string') {
                    self.listA.sort();
                    self.listA.reverse();
                }
                for (var i = 0; i < self.column().length; i++) {
                    self.column()[i].sortUp(0);
                }
                self.column()[q].sortUp(false);
            }

            self.showList(new MemModel(self.listA));
            self.listA = [];
        }


        loadData();
        // Load data from remote
        function loadData() {
            // $.ajax('../server/postdata.json', function (data) {
            //     debugger;
            //     self.loadTableInfo(self.pageIndex(), data);
            // });
            $.ajax({
                url: "../server/postdata.json"
            }).done(function (data) {
                self.loadTableInfo(self.pageIndex(), data);
            });
        }

        //读取数据
        self.loadTableInfo = function (pageI, data) {
            self.chosenSize(data.chosenSize);
            self.selectPage([]);
            self.showList([]);
            self.pageIndex(data.pageIndex);
            self.pageSize(data.pageSize);
            self.memNum(data.pageNum);
            self.pageNum(Math.ceil((data.pageNum) / self.pageSize()));
            var ax = self.pageIndex() - 3;
            if (ax <= 0) {
                ax = 1;
            }
            for (var i = 0; i < 9; i++) {
                self.selectPage.push(ax);
                ax++;
            }
            //封装标题栏
            $.each(data.title, function (i, v) {
                self.column.push(new ColumnModel(v));
            });
            //开始处理内容
            $.each(data.memlist, function (index, value) {
                $.each(value, function (i, v) {
                    self.contentList.push(new Content(i, v))
                })
                self.memList.push(new MemModel(self.contentList));
                self.contentList = [];
                // self.memberTable.push(new MemberModel(value));

            });
            //循环建立数组
            for (var j = 0; j < self.pageSize(); j++) {
                for (var i = 0; i < self.column().length; i++) {
                    for (var k = 0; k < self.memList[j].length; k++) {
                        if (self.column()[i].fieldName == self.memList[j][k].fieldName) {
                            self.listA.push(self.memList[j][k].value);
                            break;
                        }
                    }
                }
                self.showList.push(new MemModel(self.listA));
                self.copyshowList = new MemModel(self.showList());
                self.listA = [];
            }

        }
        // self.loadTableInfo();

        //
        function ColumnModel(data) {
            var self = this;
            self.text = data.text;
            self.fieldName = data.fieldname;
            self.sortUp = ko.observable(0);
            self.sort = data.sort;
        }
        function MemModel(a) {
            return a;
        }
        function Content(a, b) {
            var self = this;
            self.fieldName = a;
            self.value = b;
        }




    }



    tableViewModel.prototype.dispose = function () { };
    return { viewModel: tableViewModel, template: templateMarkup };
});





