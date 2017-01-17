/**
 * Created by ASUS on 2016/12/25.
 */
var Yike = angular.module("Yike", ["ngRoute", "Ctrls"]);

Yike.run(["$rootScope", function ($rootScope) {

    $rootScope.title = "今日一刻";

    $rootScope.collapsed = false;

    $rootScope.current = 0;

    $rootScope.loaded = false;

    $rootScope.toggle = function () {

        var navs = document.querySelectorAll(".navs dd");

        $rootScope.collapsed = $rootScope.collapsed ? false : true;

        //navs列表制作动画效果
        if($rootScope.collapsed){
            for (var i = 0; i < navs.length; i++) {
                navs[i].style.transform = 'translate(0)';
                //设置元素的过渡时间
                navs[i].style.transitionDuration = 0.2*i+"s";
                navs[i].style.transitionDelay = "0.2s";
            }
        }else{
            for (var i = navs.length-1; i >= 0; i--) {
                navs[i].style.transform = 'translate(-100%)';
                //设置元素的过渡时间
                navs[i].style.transitionDuration = 0.2*(navs.length-i)+"s";
                navs[i].style.transitionDelay = "0s";
            }
        }

    }
}])

//配置路由
Yike.config(["$routeProvider",function($routeProvider){

    $routeProvider.when("/today",{
        templateUrl: "./views/today.html",
        controller: "TodayCtrl"
    }).when("/older",{
        templateUrl: "./views/older.html",
        controller: "OlderCtrl"
    }).when("/hot",{
        templateUrl: "./views/hot.html",
        controller: "HotCtrl"
    }).when("/view",{
        templateUrl: "./views/view.html",
        controller: "ViewCtrl"
    }).when("/like",{
        templateUrl: "./views/like.html"
    }).when("/settings",{
        templateUrl: "./views/settings.html"
    }).otherwise({
        redirectTo: "/today"
    })
}])