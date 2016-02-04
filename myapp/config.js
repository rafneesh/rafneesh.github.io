myApp.config(function($stateProvider){
    $stateProvider
        .state('home', {
            url: "/",
            views: {
							  "createTaskView": {
                    templateUrl: "./myapp/views/createTask.html"
                },
                "listTaskView": {
                    templateUrl: "./myapp/views/taskList.html"
                }
            }
        })
});
