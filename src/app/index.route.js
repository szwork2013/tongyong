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











      /**
       * 文章列表
      */
      //带图片
      .state('arList01', {
        url: '/arList01?catid&{bar:bool}&navtype',
        templateUrl: 'app/arlist/arlist01/arlist01.html',
        controller: 'arListCtrl',
        controllerAs: 'arlist'
      })
      //不带图片
      .state('arList01-1', {
        url: '/arList01-1?catid&{bar:bool}&navtype',
        templateUrl: 'app/arlist/arlist01/arlist01-1.html',
        controller: 'arListCtrl',
        controllerAs: 'arlist'
      })
      //不带图片
      .state('arList02', {
        url: '/arList02?catid&{bar:bool}&navtype',
        templateUrl: 'app/arlist/arlist02/arlist02.html',
        controller: 'arListCtrl',
        controllerAs: 'arlist'
      })

      /**
       * 文章详情 
      */
      //英孚风格  蓝色
      .state('arDetail01', {
        url: '/arDetail01',
        templateUrl: 'app/arlist/arlist01/arlist01.html',
        controller: 'arListCtrl',
        controllerAs: 'arlist'
      })


      /**
       * 活动列表
      */
      //默认风格
      .state('acList01', {
        url: '/acList01',
        templateUrl: 'app/dz-list/dz-list.html',
        controller: 'acListCtrl',
        controllerAs: 'list'
      })

      /**
       * 活动详情
      */
      .state('acDetail01', {
        url: '/acList01',
        templateUrl: 'app/dz-list/dz-list.html',
        controller: 'acListCtrl',
        controllerAs: 'list'
      })


    ;


    //测试
    $urlRouterProvider.otherwise('/arList01?catid=507&bar=1&navtype=top');

    
  }

})();
