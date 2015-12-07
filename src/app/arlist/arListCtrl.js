(function () {
  'use strict';
  angular
    .module('zhiyun')
    .controller('arListCtrl', arListCtrl)

  /** 列表页 */
  function arListCtrl($location, $scope, wPopup, wxAPI, nAPI, $q, $filter, wLoading, $stateParams, $http, $timeout) {

    console.log($stateParams)

    var arlist = this;
    arlist.listData = [];//文章列表
    arlist.navData = [];//导航列表
    arlist.params = $stateParams;
    arlist.keyword = "";

    //有导航参数  调导航接口 导航数据做导航
    if (arlist.params.navtype) {
      nAPI.navigation({navigation_link_type: arlist.params.navtype})
        .then(function (data) {
          // arlist.navData = data;

          //=============模拟导航数据(可删除)============
          arlist.navData = [{
            children: null,
            navigation_id: 30,
            navigation_img_url: "",
            navigation_link: "arList02({catid:507,navtype:'top',bar:1})",
            navigation_name: "模板2",
          }, {
            children: null,
            navigation_id: 30,
            navigation_img_url: "",
            navigation_link: "arList01({catid:507,navtype:'top',bar:1})",
            navigation_name: "模板1",
          }, {
            children: null,
            navigation_id: 30,
            navigation_img_url: "",
            navigation_link: "arList01-1({catid:507,navtype:'top',bar:1})",
            navigation_name: "模板1-1",
          }, {
            children: null,
            navigation_id: 30,
            navigation_img_url: "",
            navigation_link: "arList03({catid:507,navtype:'top',bar:0})",
            navigation_name: "模板3",
          }];
          // console.log(data)
          var width = (1 / arlist.navData.length) * 100 + "%";  //根据返回的菜单数组动态计算宽度
          $timeout(function () {
            $(".list-tabs").css("width", width);  //使用JQ应用宽度
          });
        })
    } else {
      //==============拉取文章分类  做导航==============

    }


    //根据参数取文章数据
    var arList = {
      category_id: arlist.params.catid
    }
    nAPI.articleList(arList)
      .then(function (data) {
        // console.log(data.returnObj.list)
        arlist.listData = data.returnObj.list;
      })

    //定义页面方法集合
    var pageFunc = $scope.pageFunc = {};

    //分类菜单细节善后处理
    pageFunc.maskShow = function () {
      $('body').scrollTop(0).css('overflow', 'hidden');
    }
    pageFunc.maskHide = function () {
      $('body').css('overflow', 'auto');
    }
    //善后处理结束

    //搜索功能实现
    pageFunc.search = function () {


    }

  }
})();
