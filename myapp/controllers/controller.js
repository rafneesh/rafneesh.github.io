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

  $scope.deleteFields = function () {
              console.log("deleting");
            $scope.forms.pop();
            console.log("deleted");
  }

  $scope.saveTasks = function(form){

    console.log('Validation status'+this.taskForm.$valid);
    console.log('Validation status'+this.form.title);
    if(this.taskForm.$valid){
    this.tasks.push({ 'title':this.form.title, 'desc': this.form.desc, 'date':this.form.date, 'done':false, 'time':this.form.time });
    this.form.title='';
    this.form.desc='';
    this.form.date='';
    this.form.time='';
  }
  };
  $scope.markDone = function(task){
    task.done = true;
  };



});
