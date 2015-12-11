angular.module('bibimovie.controllers', [])

  .controller('HomeCtrl', function ($scope, $http, ApiEndpoint, HomeService) {
    var url = ApiEndpoint.server_url + "hotMovies?cityId=1";
    $http.get(url)
      .success(function (data) {
        $scope.movies = data;
      })
  })
