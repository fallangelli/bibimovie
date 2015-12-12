angular.module('bibimovie.controllers', [])

  .controller('HomeCtrl', function ($scope, $http, ApiEndpoint, HomeService) {
    var url = ApiEndpoint.server_url + "hotMovies?cityId=2861";
    $http.get(url)
      .success(function (data) {
        var movies = angular.fromJson(data)
        $scope.movieList = movies;
      })
  })
