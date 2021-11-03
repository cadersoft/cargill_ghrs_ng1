var app = angular.module('app', [])
  .filter('to_trusted', ['$sce', function ($sce) {
    return function (text) {
      return $sce.trustAsHtml(text);
    };
  }]);
app.directive("navMenu", function () {
  return {
    restrict: "E",
    templateUrl: "menu.html"
  };
});
app.directive("processbar", function () {
  return {
    restrict: "E",
    scope: {
      animate: '@'
    },
    templateUrl: "components/process_bar.html"
  };
});
app.directive("processArrow", function () {
  return {
    restrict: "E",
    scope: {
      active: '@'
    },
    templateUrl: "components/process_arrow.html"
  };
});
app.controller("menu-controller", function ($scope) {

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