var myApp=angular.module("myApp",[]);
myApp.controller("myController",function($scope,$http){
    // $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

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
        
        $scope.saveURL='index.php';
        const userData={
            username: $scope.newUser.username,
            fullName: $scope.newUser.fullName,
            email: $scope.newUser.email,
        }
        $scope.saveCurrentData(userData);
        

    };
    $scope.saveCurrentData=function(passData){
       
        
     /*    $http({
            method: "POST",
            url: "index.php",
            data:   passData
            
        }).then(function(response) {
            $scope.data = response.data;
            return "I am good";
        }).catch(function(err) {
            $scope.status = err.status;
            
        }); */

       /*  $http.post('https://jsonplaceholder.typicode.com/posts.php',JSON.stringify(passData))
        .then(function (response){
            console.log(response.data);
        }) */

        $http({
            url:'insert.php',
            method:'POST',
            data:passData,
        }).then(function(response) {
            console.log(response)
        },function(error){
            console.log('India')
            console.log(error)
        });
        
        
    }
    
    
});

