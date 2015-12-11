angular.module('bibimovie', ['ionic', 'bibimovie.services', 'bibimovie.controllers'])
  .constant('ApiEndpoint', {
    server_url: 'http://localhost:8100/server_url/'


    //his_url: 'http://vip.stock.finance.sina.com.cn/corp/go.php/vMS_MarketHistory/stockid/',
    //hq_url: 'http://hq.sinajs.cn/',
    //gf_url: 'http://www.gf.com.cn/match/nxsy/',
    //img_url: 'http://image.sinajs.cn/newchart/'
  })

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      })
    $urlRouterProvider.otherwise('/');
  });


