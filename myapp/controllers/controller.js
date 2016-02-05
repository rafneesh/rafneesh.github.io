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


  $scope.forms = [
        { title: '', desc: '', date: '', desc:''}
      ]

  $scope.addFields = function () {
            $scope.forms.push({ title: '', desc: '', date: '', desc:''});
  }

  $scope.addRow = function(form){

    console.log('Validation status'+this.taskForm.$valid);
    console.log('Validation status'+form.title);
    if(this.taskForm.$valid){
    this.tasks.push({ 'title':form.title, 'desc': form.desc, 'date':form.date, 'done':false, 'time':form.time });
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
