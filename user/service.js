angular.module("user.service",[])
    .service("UserService",function ($http) {
        var userList = [{name: 'test', age: 1}];
        this.getUser = function () {
            // return userList;
            return $http.get("user.json");
        }
    })