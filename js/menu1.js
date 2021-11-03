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
    $scope.active_no = 5;
  })
  $().ready(function () {
    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop >= 100) {
        $("#menu").addClass("active");
        $("#logo").attr('src', 'images/white_logo.svg');
      } else {
        $("#menu").removeClass("active");
        $("#logo").attr('src', 'images/logo.svg');
      }
    });
  })