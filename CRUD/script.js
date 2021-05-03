var myApp=angular.module("myApp",[]);
myApp.controller("myController",function($scope){
    console.log("Angular is going on......")

    $scope.newUser = {};
    $scope.clickedUser={};

    $scope.users=[
        {username:"Rimon", fullName:"Rimon Mahmud", email:"rimon@gmail.com"},
        {username:"Anik", fullName:"Anik Mahmud", email:"Anik@gmail.com"},
        {username:"Shazu", fullName:"Shazu Mahmud", email:"Shazu@gmail.com"},
        {username:"Pinky", fullName:"Pinky Mahmud", email:"Pinky@gmail.com"},
    ]

    $scope.saveUser=function(){
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
    };

    $scope.selectUser=function(user){
        $scope.clickedUser=user;
    }
    $scope.deleteUser=function(){
        console.log('delete button e click marse')
        $scope.users.splice($scope.users.indexOf($scope.clickedUser),1);
        
    }
});