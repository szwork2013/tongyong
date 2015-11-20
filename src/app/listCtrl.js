angular
  .module('zhiyun')
  .controller('listCtrl', listCtrl);

function listCtrl($state,$stateParams, $scope, commService,$timeout) {
  var pageData = $scope.pageData = { //tab切换标识
    menu: {},
    width:"",
    cateid:"",
    info: {},
    type:"",
    dz_img: ['http://dev2.comeoncloud.net/customize/ef/assets/images/dizhou/banner.jpg', 'http://dev2.comeoncloud.net/customize/ef/assets/images/dizhou/banner2.jpg', 'http://dev2.comeoncloud.net/customize/ef/assets/images/dizhou/banner3.jpg']
  };
  var pageFunc = $scope.pageFunc = {};

  pageFunc.loadPage = function () {
    commService.get(
      commService.baseData.listMenuUrl,
      {
        action:'typelist',
        navigation_link_type: $stateParams.type
      }, function (data) {
        pageData.menu = data;
        for(i=0;i<pageData.menu.length;i++){
          pageData.menu[i].isShow=pageData.menu[i].navigation_link.substring(pageData.menu[i].navigation_link.lastIndexOf("/")+1);
        }
        pageData.width=(1/data.length)* 100+"%";
        $timeout(function() {
          $(".yf-list-tabs").css("width", pageData.width);
        });
        if($stateParams.id==""){
          $stateParams.id=pageData.cateid=pageData.menu[0].navigation_link.substring(pageData.menu[0].navigation_link.lastIndexOf("/")+1);
        }else {
          pageData.cateid=$stateParams.id;
        }
        pageFunc.loadList($stateParams.id);
        pageData.type=$stateParams.type;
      }
    );
  };

  pageFunc.loadList= function (cateid) {
    commService.get(
      commService.baseData.listUrl,
      {
        category_id: cateid
      }, function (data) {
        if (data.isSuccess == true) {
          pageData.info = data.returnObj;
        }
      }
    );
  };

  pageFunc.go = function (route, id) { //利用路由进行跳转
    $state.go(route, id);
  };

  pageFunc.goTo = function (url) {
    window.location.href = url;
  };

}
