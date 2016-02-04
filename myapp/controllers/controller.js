myApp.controller('mainController', function($scope,TaskServices) {
  $scope.tasks = [];
  $scope.loadTasks=function(){

    		TaskServices.getSavedTasks().then(
                    function(data) {
                        $scope.tasks = data;
                     },
                     function(errResponse){
                         console.error('Error while fetching tassk');
                     }
              );
  };
  $scope.loadTasks();
  $scope.addRow = function(){

    console.log('Validation status'+this.taskForm.$valid);
    if(this.taskForm.$valid){
    this.tasks.push({ 'title':this.title, 'desc': this.desc, 'date':this.date, 'done':false, 'time':this.time });
    $scope.title='';
    $scope.desc='';
    $scope.date='';
    $scope.done='';
  }
  };
  $scope.markDone = function(task){
    task.done = true;
  };



});
