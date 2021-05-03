var app = angular.module('myApp',[]);
app.controller('myController',function($scope){
    $scope.title="This is page title";
})

app.controller('SecondController',function($scope){
    $scope.paragraph="This is my Paragraph";
})

app.controller('loop',function($scope){
    $scope.array=['Mango','jackFruit','Banana','Lichi','Guava'];
})

app.controller('info',function($scope){
    $scope.users=[
        {name:"Runju", age:"18",gender:"male"},
        {name:"Ratna", age:"18",gender:"female"},
        {name:"Shazu", age:"18",gender:"male"},
        {name:"Pinky", age:"18",gender:"female"},
        {name:"jibon", age:"18",gender:"male"},
    ]
}); 