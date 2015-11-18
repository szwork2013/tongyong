(function () {
  'use strict';

  angular
    .module('zhiyun')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      //英孚
      .state('yf-index', {
        url: '/yf-index',
        templateUrl: 'app/yf-index/yf-index.html',
        controller: 'listCtrl',
        controllerAs: 'list'
      })
      .state('yf-about', {
        url: '/yf-about',
        templateUrl: 'app/yf-about/yf-about.html',
        controller: 'listCtrl',
        controllerAs: 'list'
      })
      .state('yf-ef', {
        url: '/yf-ef',
        templateUrl: 'app/yf-ef/yf-ef.html',
        controller: 'listCtrl',
        controllerAs: 'list'
      })
      .state('yf-course', {
      url: '/yf-course',
      templateUrl: 'app/yf-course/yf-course.html',
      controller: 'listCtrl',
      controllerAs: 'list'
    })
      .state('yf-reader', {
        url: '/yf-reader/:id',
        templateUrl: 'app/yf-reader/yf-reader.html',
        controller: 'detailCtrl',
        controllerAs: 'detail'
      })
      //迪洲
      .state('dz-index', {
        url: '/dz-index',
        templateUrl: 'app/dz-index/dz-index.html',
        controller: 'listCtrl',
        controllerAs: 'list'
      })
      .state('dz-enter', {
        url: '/dz-enter',
        templateUrl: 'app/dz-enter/dz-enter.html',
        controller: 'detailCtrl',
        controllerAs: 'detail'
      })
      .state('dz-product', {
        url: '/dz-product',
        templateUrl: 'app/dz-product/dz-product.html',
        controller: 'listCtrl',
        controllerAs: 'list'
      })
      .state('dz-detail', {
        url: '/dz-detail',
        templateUrl: 'app/dz-detail/dz-detail.html',
        controller: 'detailCtrl',
        controllerAs: 'detail'
      })
    ;
    $urlRouterProvider.otherwise('/yf-index');
  }

})();
