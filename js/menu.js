var app = angular.module('app', [])
 .filter('to_trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);
app.directive("navMenu", function() {
    return {
        restrict : "E",
        templateUrl : "menu.html"
    };
  });

  app.controller("menu-controller", function($scope){
    $scope.active_no = 4;
  })