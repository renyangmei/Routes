var app=angular.module('DemoApp',['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'tpl/main.html',
        controller:"main"
    }).when('/first',{
        templateUrl:'tpl/first.html',
        controller:"first"
    }).when('/two',{
        templateUrl:'tpl/two.html',
        controller:"two"
    }).when('/three',{
        templateUrl:'tpl/three.html',
        controller:"three"
    })
}]);


app.controller("main",["$scope","$http",function($scope,$http){
    $scope.title="首页";
    $http({
        url:'data/data.json',
        method:"get"
    }).then(function (res) {
        $scope.names = res.data;
        console.log(res);
        console.log($scope.names);
        console.log(res.data)
    })
}])
app.controller("first",["$scope","$http",function($scope,$http){
    $scope.title="电话";
    $http({
        url:'data/phone.json',
        method:"get"
    }).then(function (res) {
        $scope.phone = res.data;
        console.log(res);
        console.log($scope.phone);
        console.log(res.data)
    })
}])
app.controller("two",["$scope","$http",function($scope,$http){
    $scope.title="邮件";
    $http({
        url:'data/data.json',
        method:"get"
    }).then(function (res) {
        $scope.names = res.data;
        console.log(res);
        console.log($scope.names);
        console.log(res.data)
    })
}])
app.controller("three",["$scope","$http",function($scope,$http){
    $scope.title="设置";
}])