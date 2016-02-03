myApp.factory('TaskServices', function($http,$q) {
  return{
  getSavedTasks:function() {
  	    return $http.get('./myapp/tasks.JSON')
	            .then(
	                    function(response){
                          return response.data;
	                    },
	                    function(errResponse){
	                        console.error('Error while fetching saved tasks');
	                        return $q.reject(errResponse);
	                    }
	            );
	}
  }
});
