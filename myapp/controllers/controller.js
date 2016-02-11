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
    console.log('Titlw'+this.form.title+" Desc"+this.form+" Date:"+this.form.date+" Time:"+this.form.time);
    if(this.taskForm.$valid){
    this.tasks.push({ 'title':this.form.title, 'desc': this.form.desc, 'date':this.form.date, 'done':false, 'time':this.form.time });
    this.form.title='';
    this.form.desc='';
    this.form.date='';
    this.form.time='';
    this.taskForm.$setPristine();
    alert("Task Created..");
    }else{
    alert("Please enter all the required/valid data");
    }
  };
  $scope.markDone = function(task){
    task.done = true;
  };
  $scope.orderByDate = function(){
    $scope.myOrderBy = 'date';
  };
  $scope.orderByDefault = function(){
    $scope.myOrderBy = '';
  };



});
