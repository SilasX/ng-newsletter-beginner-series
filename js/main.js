var app = angular.module('myApp', []);

app.run(function($rootScope) {
  $rootScope.name = "Silas B.";
});

app.controller('MyController', function($scope) {
  $scope.person = {
    name: "Other Silas"
  };
});


app.controller('ChildController', function($scope) {
  $scope.sayHello = function() {
    if ($scope.person.greeted === "true"){
      $scope.person.greeted = "false";
    } else {
      $scope.person.greeted = "true";
    }
  }
});
