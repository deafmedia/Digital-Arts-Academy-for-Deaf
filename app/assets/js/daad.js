/**
 * Main AngularJS Web Application
 */
var app = angular.module('DAADWebApp', ['ngRoute', 'video-background']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    // Home
        .when("/", { templateUrl: "partials/home.html", controller: "HomeCtrl" })
        // Pages
        .when("/about", { templateUrl: "partials/about.html", controller: "PageCtrl" })
        .when("/contact", { templateUrl: "partials/contact.html", controller: "PageCtrl" })
        // else 404
        .otherwise("/404", { templateUrl: "partials/404.html", controller: "PageCtrl" });

}]);

app.controller('HomeCtrl', function($scope) {
    $scope.myVideo = {
        mp4: 'http://127.0.0.1:8080/assets/images/info.mp4'
    }
    $scope.message = "Hello world";
});

// angular.element(document).ready(function() {
//     angular.bootstrap(document, ['DAADWebApp'])
// });
// app.config('HomeCtrl', function(section) {
//     var $section = $('section');
//     $(window).on("resize", function() {
//         var dif = Math.max($(window).height() - $section.height(), 0);
//         var padding = Math.floor(dif / 2) + 'px';
//         $section.css({
//             'padding-top': padding,
//             'padding-bottom': padding
//         });
//     }).trigger("resize");
//     $('#myCounter').mbComingsoon({
//         expiryDate: new Date(2018, 0, 1, 9, 30),
//         speed: 100
//     });
//     setTimeout(function() {
//         $(window).resize();
//     }, 200);
// });
