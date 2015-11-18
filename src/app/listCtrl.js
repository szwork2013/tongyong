angular
  .module('zhiyun')
  .controller('listCtrl', listCtrl);

function listCtrl($state, $scope, commService) {
  var pageData = $scope.pageData = { //tab切换标识
    a: true,
    b: false,
    c: false,
    d: false,
    info: {},
    menu: {},
    dz_img: ['http://dev2.comeoncloud.net/customize/ef/assets/images/dizhou/banner.jpg', 'http://dev2.comeoncloud.net/customize/ef/assets/images/dizhou/banner2.jpg', 'http://dev2.comeoncloud.net/customize/ef/assets/images/dizhou/banner3.jpg']
  };
  var pageFunc = $scope.pageFunc = {};

  pageFunc.loadPage = function (catid, menu) {
    commService.get(
      commService.baseData.listUrl,
      {
        category_id: catid
      }, function (data) {
        if (data.isSuccess == true) {
          pageData.info = data.returnObj;
        }
      }
    );
    commService.get(
      commService.baseData.listMenuUrl,
      {
        action: menu
      }, function (data) {
        pageData.menu = data[0].children;
      }
    );
  };

  pageFunc.go = function (route, id) { //利用路由进行跳转
    $state.go(route, id);
  };

  pageFunc.goTo = function (url) {
    window.location.href = url;
  };

  pageFunc.tabs = function (e) { //tab切换逻辑
    if (e == "1") {
      pageData.a = true;
      pageData.b = false;
      pageData.c = false;
      pageData.d = false;
    } else if (e == "2") {
      pageData.a = false;
      pageData.b = true;
      pageData.c = false;
      pageData.d = false;
    } else if (e == "3") {
      pageData.a = false;
      pageData.b = false;
      pageData.c = true;
      pageData.d = false;
    } else if (e == "4") {
      pageData.a = false;
      pageData.b = false;
      pageData.c = false;
      pageData.d = true;
    }
  };
}
