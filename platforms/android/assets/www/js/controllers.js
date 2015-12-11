angular.module('bibimovie.controllers', [])

  // *******************
  // 向导页面
  // *******************
  .controller('HomeCtrl', function ($scope, HomeService) {
    $scope.movies = HomeService.findAll();
  })
