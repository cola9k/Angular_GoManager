/**
 * Created by KTH_LAP on 2017-01-14.
 */
// $(function () {
//     var nameEI = $("form input#name");
//     var askBtnEI = $("#ask-btn");
//     var agePanel = $("#age");
//
//     function getAge(name) {
//         $.ajax({
//             url: "user.json",
//             type: "GET",
//             contentType: "application/json",
//             success: function (data) {
//                 var foundUser = {};
//                 data.data.forEach(function (user) {
//                     if (user.name === name) foundUser = user;
//                 });
//                 if (foundUser.name) agePanel.text(foundUser.age);
//                 else agePanel.text("No user found");
//             }
//         });
//     }
//
//     askBtnEI.on("click", function (e) {
//         var userName = nameEI.val();
//         var name = nameEI.val();
//         getAge(name);
//         e.preventDefault();
//     });
//     // nameEI.val("taehyune");
//
//     // nameEI.on("keypress", function (e) {
//     //     console.log(nameEI.val());
//     // });
//     // nameEI.change(function () {
//     //     console.log(nameEI.val());
//     // });
//     // nameEI.on("input", function () {
//     //     console.log(nameEI.val());
//     // })
//
// });
/*template*/
// angular.module("sample", [])
//     .run(function () {
//         console.log("App started.");
//     })
//     .controller("mainCtrl", function ($scope) {
//         var jay = {
//             name: "jay",
//             age: 22
//         };
//         var me = {
//             name : "김태현",
//             age : 25
//         };
//         $scope.$watch()
//         $scope.signUp = function (form) {
//             if(form.$valid) $scope.text = "사용자 정보 : "+$scope.name+" 님"+ $scope.tel+" / "+$scope.email;
//             else $scope.text = "사용자 정보가 옳지 않습니다.";
//         };
//         $scope.person = jay;
//         $scope.person = me; // angular는 scope 객체에서 받는다. javascript에서는 지역변수를 모두 window에서 받는 것과 비슷
//         $scope.people = [jay,me];
//         $scope.checked = true;
//         $scope.handleEvent = function (text) {
//             $scope.text = text;
//         }
//     });^

angular.module("sample", ["ngRoute", "user.controller", "user.service"])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: "home/home.tmpl.html",
                controller: "mainCtrl"
            })
            .when('/user', {
                templateUrl: "user/user.tmpl.html",
                controller: "userCtrl"
            })
            .otherwise({
                redirectTo: "/home"
            });
    })
    .run(function () {
        console.log("App started.");
    })
    .controller("mainCtrl", function ($scope) {});
    /*provider
    .config(["UserServiceProvider", function (userServiceProvider) {
        userServiceProvider.config("hello");
    }])
    // 코드를 여러번 재사용하고 싶을 시 provider를 사용함
    .provider("UserService", function UserServiceProvider() { // 생성자 함수를 리턴해주는 함수, 내부적으로 provider라는 것을 angular에서 제공해준다. 따라서 service랑 factory는 프로바이더를 감싸고 있다고 본다
        var configValue = "";
        function UserService() {
            var userList = [{name: 'test', age: 1}];
            this.getUser = function () {
                return userList;
            }
        }
        UserService.prototype.say = function () {console.log(configValue);};
        function userServiceFactory() {
            var userList = [{name: 'test', age: 1}];
            return {
                getUser: function () {
                    return userList;
                }
            }
        }
        this.config = function (v) {
            configValue = v;
        };
        this.$get = [function () {
            return new UserService(); // 여기서 리턴은 생성자를 리턴해주는 함수여야한다. userservice라는 타입
            // return new userServiceFactory(); // 단순 객체 타입
        }]
    })*/

    // .service("UserService",function ($http) {
    //     var userList = [{name: 'test', age: 1}];
    //     this.getUser = function () {
    //         // return userList;
    //         return $http.get("user.json");
    //     }
    // })

    /*.factory("UserService", function () { // 객체 생성 함수
        var userList = [{name: 'test', age: 1}];
        return {
            getUser: function () {
                return userList;
            }
        }
    })*/

    /*controller*/
    /*.controller("mainCtrl", function ($scope, $http, UserService) {
     $scope.people= [];
     var user=  UserService.getUser();
     $scope.people = user;
     // $http.get("user.json")
     //     .then(function (data) {
     //     $scope.people = data.data.data;
     // });
     }*/
