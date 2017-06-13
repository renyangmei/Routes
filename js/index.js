var app=angular.module('DemoApp',['ngRoute']);
/*路由*/
app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'tpl/route/main.html',
        controller:"main"
    }).when('/mainInfo/:id',{
        templateUrl:'tpl/route/mainInfo.html',
        controller:"mainInfo"
    }).when('/mail',{
        templateUrl:'tpl/route/mail.html',
        controller:"mail"
    }).when('/phone',{
        templateUrl:'tpl/route/phone.html',
        controller:"phone"
    }).when('/setting',{
        templateUrl:'tpl/route/setting.html',
        controller:"setting"
    })
}]);
/*控制器*/
app.controller("main",["$scope","$http",function($scope,$http){
    $scope.title="首页";
    $http({
        url:'data/data.json',
        method:"get"
    }).then(function (res) {
        // alert(1);
        $scope.names = res.data;
        console.log(res);
        console.log($scope.names);
        console.log(res.data)
    })
}]);
app.controller("mail",["$scope","$http",function($scope,$http){
    $scope.title="邮件";
    $http({
        url:'data/person.json',
        method:"get"
    }).then(function (res) {
        // alert(2);
        $scope.names = res.data;
    })
}]);
app.controller("phone",["$scope","$http",function($scope,$http){
    $scope.title="电话";
    $http({
        url:'data/phone.json',
        method:"get"
    }).then(function (res) {
        $scope.phone = res.data;
    })
}]);
app.controller("setting",["$scope","$http",function($scope,$http){
    $scope.title="设置";
}]);
app.controller("mainInfo",["$scope","$http",function($scope,$http){
    console.log($scope.data);

    $http({
        url:'data/Info.json',
        method:"get",

    }).then(function (res) {
        $scope.info = res.data;
        console.log($scope.info)
    })
}]);
/*组件*/
app.component("pageHeader",{
    templateUrl:"./tpl/component/head/pageheader.html",
    controller:function ($scope) {
        $scope.title="页面"
    }
});
