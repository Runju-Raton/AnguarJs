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
            var res=response
            console.log(res.data.name1)
        },function(error){
            console.log(error)
        });
        $scope.show();
        
    }

    // show data code goes here 
    $scope.show=function(){
        $http({
            url:'show.php',
            method:'POST',
        }).then(function(response){
            $scope.tableData=response.data;
        },function(error){
            console.log(error);
        });
        
    }

    $scope.selectUser=function(user){
        $scope.clickedUser=user;
    }
    $scope.deleteUser=function(){
        $http({
            url:'delete.php',
            method:'POST',
            data:{
                'id':$scope.clickedUser.id
            }}).then(function(response){
                $scope.msg=response.data;
                console.log($scope.msg);
            },function(error){
                console.log(error);
            });
        $scope.show();
    }
    
});

