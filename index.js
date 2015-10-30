"use strict";

var MyApp = angular.module("MyApp", ["ngAnimate"]);

//create a controller. 2nd parm is the fuction that control my contrller.
MyApp.controller("MyCtrl", ["$scope", "$http", MyCtrl]);
//$scope is the binding bet. VM and M.

function MyCtrl($scope, $http){
    $scope.Title = "Notes Title";
    $scope.Content = "";
    $scope.Note = [];
    
    $scope.addNote = function(){
        var newNote = {
            header: $scope.Title,
            body: $scope.Content
        }
        $scope.Note.push(newNote);
    }
    
    $scope.deleteNote = function($index){
        console.log(">> $index = " + $index);
        $scope.Note.splice($index, 1);
    }

}