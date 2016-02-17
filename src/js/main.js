// require("./lib/social");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
require("angular/angular.min");

var app = angular.module("paygap",[]);

app.controller("PayGapController",["$scope", "$filter", function($scope) {

  $scope.genderDataEdu = genderDataEdu;
  $scope.genderDataProf = genderDataProf;

  $scope.selectedTable = "edu";
  $scope.selectSort = "Order";
  $scope.sortOrder = -1;

  $scope.selectedProf = 1;

  $scope.sortTable = function(selectSort) {

    $scope.selectSort = selectSort;

    if ($scope.lastSort == selectSort) {
      $scope.sortOrder *= -1;
    } else {
      $scope.lastSort = selectSort;
      $scope.sortOrder = 1;
    }

    $scope.genderDataEdu.sort(function(a, b) {
      a = a[selectSort];
      b = b[selectSort];

      if (a < b) {
        return 1 * $scope.sortOrder;
      } else if (a > b) {
        return -1 * $scope.sortOrder;
      } else if (a == b) {
        return 0;
      }
    });

    $scope.genderDataProf.sort(function(a, b) {
      a = a[selectSort];
      b = b[selectSort];

      if (a < b) {
        return 1 * $scope.sortOrder;
      } else if (a > b) {
        return -1 * $scope.sortOrder;
      } else if (a == b) {
        return 0;
      }
    });


  };

}]);
