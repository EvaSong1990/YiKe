angular.module("Ctrls",[])

    .controller("NavsController",["$scope",function($scope){
        var navs = [
            {text: '今日一刻', link: '#/today', icon: 'icon-home'},
            {text: '往期内容', link: '#/older', icon: 'icon-file-empty'},
            {text: '热门作者', link: '#/hot', icon: 'icon-pencil'},
            {text: '栏目浏览', link: '#/view', icon: 'icon-menu'},
            {text: '我的喜欢', link: '#/like', icon: 'icon-heart'},
            {text: '设置', link: '#/settings', icon: 'icon-cog'},
        ];
        $scope.navs = navs;

    }])
//今日一刻
    .controller("TodayCtrl",["$scope","$http","$rootScope",function($scope,$http,$rootScope){

        $rootScope.loaded = false;

        $rootScope.title = "今日一刻";

        $rootScope.current = 0;

        $http({

            url: "/today"

        }).success(function(info){

            $scope.date = info.date;

            $scope.posts = info.posts;

            $rootScope.loaded = true;

        })
    }])
//往期内容
    .controller("OlderCtrl",["$scope","$http","$rootScope",function($scope,$http,$rootScope){

        $rootScope.loaded = false;

        $rootScope.title = "往期内容";

        $rootScope.current = 1;

        var day = -1;

        $http({

            url: "/older",

            params: {day: day}

        }).success(function(info){

            $scope.date = info.date;

            $scope.posts = info.posts;

            $rootScope.loaded = true;

            console.log(info)

        })

    }])
//热门作者
    .controller("HotCtrl",["$scope","$http","$rootScope",function($scope,$http,$rootScope){

        $rootScope.loaded = false;

        $rootScope.title = "热门作者";

        $rootScope.current = 2;

        $http({

            url: "hot"

        }).success(function(info){

            $scope.rec = info.rec;

            $scope.all = info.all;

            $rootScope.loaded = true;

        })
    }])
//栏目浏览
    .controller("ViewCtrl",["$scope","$http","$rootScope",function($scope,$http,$rootScope){

        $rootScope.loaded = false;

        $rootScope.title = "栏目浏览";

        $rootScope.current = 3;

        $http({

            url: '/view'

        }).success(function(info){

            $scope.columns = info.columns;

            $rootScope.loaded = true;

        })
    }])