angular
  .module('zhiyun')
  .controller('listCtrl', listCtrl);

function listCtrl($state,$stateParams, $scope, commService,$timeout) {
  var pageData = $scope.pageData = {  //页面数据定义区
    menu: {}, //菜单对象
    width:"", //动态宽度
    cateid:"",  //记录分类ID
    info: {}, //页面展示信息对象
    type:"",  //自定义导航类型存储
    dz_img: ['http://dev2.comeoncloud.net/customize/ef/assets/images/dizhou/banner.jpg', 'http://dev2.comeoncloud.net/customize/ef/assets/images/dizhou/banner2.jpg', 'http://dev2.comeoncloud.net/customize/ef/assets/images/dizhou/banner3.jpg']
    //迪洲焦点图数组
  };
  var pageFunc = $scope.pageFunc = {};

  pageFunc.loadPage = function () { //载入自定义导航
    commService.get(
      commService.baseData.listMenuUrl,
      {
        action:'typelist',
        navigation_link_type: $stateParams.type //将地址栏的导航信息作为参数
      }, function (data) {
        pageData.menu = data; //将返回的菜单信息存入菜单对象
        for(i=0;i<pageData.menu.length;i++){  //通过循环取到分类ID，单独存储到isShow中
          pageData.menu[i].isShow=pageData.menu[i].navigation_link.substring(pageData.menu[i].navigation_link.lastIndexOf("/")+1);
        }
        pageData.width=(1/data.length)* 100+"%";  //根据返回的菜单数组动态计算宽度
        $timeout(function() {
          $(".yf-list-tabs").css("width", pageData.width);  //使用JQ应用宽度
          $(".dz-product-tabs").css("width", pageData.width);
        });
        if($stateParams.id==""){  //如果进入页面后没有传递分类ID，将菜单数组第一个菜单的分类ID作为默认ID
          $stateParams.id=pageData.cateid=pageData.menu[0].navigation_link.substring(pageData.menu[0].navigation_link.lastIndexOf("/")+1);
        }else {
          pageData.cateid=$stateParams.id;  //如果有传递分类ID，使用该ID
        }
        pageFunc.loadList($stateParams.id); //获取到菜单的信息后，将分类ID传给载入页面函数
        pageData.type=$stateParams.type;  //将页面自定义导航的导航类型存储到数组
      }
    );
  };

  pageFunc.loadList= function (cateid) {  //载入页面函数
    commService.get(
      commService.baseData.listUrl,
      {
        category_id: cateid,
        pageindex:1,
        pagesize:100
      }, function (data) {
        if (data.isSuccess == true) { //如果服务器返回成功，将返回的数组赋值给页面信息对象
          pageData.info = data.returnObj;
        }
      }
    );
  };

  pageFunc.go = function (route, id) { //利用路由进行跳转
    $state.go(route, id);
  };

  pageFunc.goTo = function (url) {  //利用原生JS操作地址栏进行跳转
    window.location.href = url;
  };

}
