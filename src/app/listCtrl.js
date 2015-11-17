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
    detail: {},
    dz_img: ['../assets/images/dizhou/banner.jpg', '../assets/images/dizhou/banner2.jpg', '../assets/images/dizhou/banner3.jpg']
  };
  var pageFunc = $scope.pageFunc = {};

  pageFunc.loadPage = function (e) {
    commService.get(
      commService.baseData.url,
      {
        action: "getarticlelist",
        pageindex: 1,
        pagesize: 10,
        sort: "time",
        cateid: e
      }, function (data) {
        pageData.info = data;
      }
    )
  };

  pageFunc.go = function (route,id) { //利用路由进行跳转
    $state.go(route,id);
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
