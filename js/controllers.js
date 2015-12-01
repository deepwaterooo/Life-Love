/**
 *
 * Responsive website using AngularJS
 * http://www.script-tutorials.com/responsive-website-using-angularjs/
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Script Tutorials
 * http://www.script-tutorials.com/
 */

'use strict';

// optional controllers
function TodoCtrl($scope) {
    　"use strict";
    $scope.model = [
	{
	    name: "Primary", list: [
		{ taskName:'Learn AngularJS', isDone:false},         
		{ taskName:'Learn Ruby on Rails ', isDone:false},         
		{ taskName:'Learn PHP Server side programming', isDone:false}
	    ]}, 
	{
	    name: "Secondary", list: [
		{ taskName:'Build a Personal Dynamic Blog', isDone:false}
	    ]
	}
];

    $scope.show = "All";
    $scope.currentShow = 0;

    $scope.addTodo = function () {
	$scope.model[$scope.currentShow].list.splice(0, 0, {taskName: $scope.newTodo, done: false});
	$scope.newTodo = '';
    };

    $scope.deleteTodo = function (item) {
	var index = $scope.model[$scope.currentShow].list.indexOf(item);
	$scope.model[$scope.currentShow].list.splice(index, 1);
    };

    $scope.changeTodo = function (i) {
	$scope.currentShow = i;
    };

    /* Filter Function for All | Incomplete | Complete */
    $scope.showFn = function (todo) {
	if ($scope.show === "All") {
	    return true;
	}else if(todo.isDone && $scope.show === "Complete"){
	    return true;
	}else if(!todo.isDone && $scope.show === "Incomplete"){
	    return true;
	}else{
	    return false;
	}
    };

    $scope.$watch("model",function (newVal,oldVal) {
	if (newVal !== null && angular.isDefined(newVal) && newVal!==oldVal) {
	    localStorageService.add("todoList",angular.toJson(newVal));
	}
    },true);

};

function HomeCtrl($scope, $http) {
}

function ProjectCtrl($scope, $http) {
}

function PrivacyCtrl($scope, $http, $timeout) {
}

function AboutCtrl($scope, $http, $timeout) {
}
