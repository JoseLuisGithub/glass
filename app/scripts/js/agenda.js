var Glass = angular.module("Glass", ["ngRoute"]);

Glass.config(function($routeProvider) {
  $routeProvider.when('/library', {
      controller: 'libraryCtrl',
      templateUrl: 'scripts/views/home.html'
  });
});

Glass.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);
