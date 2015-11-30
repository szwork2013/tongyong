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
      .state('yf-list', {
        url: '/yf-list/:type/:id',
        templateUrl: 'app/yf-list/yf-list.html',
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
        url: '/dz-enter/:id',
        templateUrl: 'app/dz-enter/dz-enter.html',
        controller: 'detailCtrl',
        controllerAs: 'detail'
      })
      .state('dz-product', {
        url: '/dz-product/:type/:id',
        templateUrl: 'app/dz-product/dz-product.html',
        controller: 'listCtrl',
        controllerAs: 'list'
      })
      .state('dz-detail', {
        url: '/dz-detail/:id',
        templateUrl: 'app/dz-detail/dz-detail.html',
        controller: 'detailCtrl',
        controllerAs: 'detail'
      })
      .state('dz-list', {
        url: '/dz-list/:type/:id',
        templateUrl: 'app/dz-list/dz-list.html',
        controller: 'listCtrl',
        controllerAs: 'list'
      })
    ;
    //$urlRouterProvider.otherwise('');
  }

})();
