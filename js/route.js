angular.module("Route",["ngRoute"])
    .config(["$routeProvider",function(route){
        route.when('/',{
            templateUrl:"tpl/main.html",
            controller:"main"
        }).when('/first',{
            templateUrl:"tpl/first.html",
            controller:"first"
        }).when('/two',{
            templateUrl:"tpl/two.html",
            controller:"two"
        }).when('/three',{
            templateUrl:"tpl/three.html",
            controller:"three"
        })

    }])
