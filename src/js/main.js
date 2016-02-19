// require("./lib/social");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
require("angular/angular.min");

var app = angular.module("paygap",[]);

genderDataProf.forEach(function(row){
  var percentGap = Math.floor(row.GapPercent*100);
  if (percentGap < 0){
    row.gapNEG = 1;
  } else {
    row.gapNEG = 0;
  }
  row.GapPercent = Math.abs(row.GapPercent);
  if (row.GapPercent < 0.7) {
    row.GapPercent = 0.7;
  }
});

genderDataEdu.forEach(function(row){
  var percentGap = Math.floor(row.GapPercent*100);
  if (percentGap < 0){
    row.gapNEG = 1;
  } else {
    row.gapNEG = 0;
  }
  row.GapPercent = Math.abs(row.GapPercent);
  if (row.GapPercent < 0.7) {
    row.GapPercent = 0.7;
  }
});

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
