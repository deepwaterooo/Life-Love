angular.module("noteApp",[]).controller("MainCtrl", function MainCtrl($scope){
    //function TodoCtrl($scope) {
    $scope.todos = [
	{title: 'AngularJS', text:'Learn AngularJS', done:false},         
	{title: 'Ruby', text:'Learn Ruby on Rails ', done:false},         
	{title: 'PHP', text:'Learn PHP Server side programming', done:false},         
	{title: 'Blog', text:'Build a Personal Dynamic Blog', done:false}
    ];

    $scope.getTotalTodos = function () {
	return $scope.todos.length;
    };

    $scope.addTodo = function () {
	$scope.todos.push({title:$scope.formTitle, text:$scope.formTodoText, done:false});
	$scope.formTitle='';
	$scope.formTodoText = '';
    };

    $scope.remaining = function() {
	var cnt = 0;
	angular.forEach($scope.todos, function(todo) {
	    cnt += todo.done ? 0 : 1;
	});
	return cnt;
    }

    $scope.clearCompleted = function () {  // archive
	/*
	  $scope.todos = _.filter($scope.todos, function(todo){
          return !todo.done;
          });
	*/
	var oldTodos = $scope.todos;
	$scope.todos = [];
	angular.forEach(oldTodos, function(todo) {
	    if (!todo.done) $scope.todos.push(todo);
	});
    };

    $scope.sortOrder={'+title': '+title', 
		    '-title': '-title', 
		    '+done': '+done', 
		    '-done': '-done'};
    $scope.currentSort='+title';

    this.filterOptions = {
	"string": '',
	"object": {done: false, label: 'C'}, 
    };
    this.currentFilter = 'string'; 

});
