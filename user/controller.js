angular.module("user.controller",[])
    .controller("userCtrl", ['$scope','$http','UserService', function ($scope, $http, users) {
            //     $scope.people = [];
            //     var user = users.getUser();
            //     $scope.people = user;
            // }]
            $scope.people = [];
            users.getUser()
                .then(function (data) {
                    $scope.people = data.data.data;
                });
        }]
    )