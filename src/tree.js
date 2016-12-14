
function ViewModel() {
    ko.components.register('tree', {
        viewModel: function () {
            var treeModelArray = ko.observableArray([]);
            function TreeModel(data) {
                var self = this;
                self.id = ko.observable(data.id);
                self.superId = ko.observable(data.superId);
                self.text = ko.observable(data.text);
            }
            $.ajax({
                type: 'GET',
                url: url,
                //data: postdata,
                //contentType: 'application/json',
                dataType: 'json',
                success: function (data) {
 
                },
                error: function () { }
            });
            function getTree() {
                // Some logic to retrieve, or generate tree structure
                var tree = [
                    {
                        text: "Parent 1",
                        nodes: [
                            {
                                text: "Child 1",
                                nodes: [
                                    {
                                        text: "Grandchild 1"
                                    },
                                    {
                                        text: "Grandchild 2"
                                    }
                                ]
                            },
                            {
                                text: "Child 2"
                            }
                        ]
                    },
                    {
                        text: "Parent 2"
                    },
                    {
                        text: "Parent 3"
                    },
                    {
                        text: "Parent 4"
                    },
                    {
                        text: "Parent 5"
                    }
                ];
                return tree;
            }

            $('#tree').treeview({ data: getTree() });
        },
        template: '<div id="tree"></div>'

    });
}
ko.applyBindings(new ViewModel());

