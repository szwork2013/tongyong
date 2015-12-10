(function () {
  'use strict';
  angular
    .module('zhiyun')
    .controller('arListCtrl', arListCtrl);

  /** 列表页 */
  function arListCtrl($location, $scope, wPopup, wxAPI, nAPI, $q, $filter, wLoading,$state, $stateParams, $http, $timeout) {

    console.log($state);

    var arlist = this;
    arlist.listData = [];//文章列表
    arlist.navData = [];//导航列表
    arlist.cateData = []; //分类列表
    arlist.params = $stateParams; //路由对象
    arlist.keyword = ''; //分类关键字
    if (!arlist.params.keyword) arlist.params.keyword = ''; //如果地址栏没有关键字，则为空，防止发送undefined作为关键字

    // console.log($stateParams)

// console.log(arlist.params.bar)

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
            navigation_name: "模板2"
          }, {
            children: null,
            navigation_id: 30,
            navigation_img_url: "",
            navigation_link: "arList01({catid:507,navtype:'top',bar:1})",
            navigation_name: "模板1"
          }, {
            children: null,
            navigation_id: 30,
            navigation_img_url: "",
            navigation_link: "arList01-1({catid:507,navtype:'top',bar:1})",
            navigation_name: "模板1-1"
          }, {
            children: null,
            navigation_id: 30,
            navigation_img_url: "",
            navigation_link: "arList03({catid:507})",
            navigation_name: "模板3"
          }, {
            children: null,
            navigation_id: 30,
            navigation_img_url: "",
            navigation_link: "arList03-1({catid:507})",
            navigation_name: "模板3-1"
          }];
          // console.log(data)
          var width = (1 / arlist.navData.length) * 100 + "%";  //根据返回的菜单数组动态计算宽度
          $timeout(function () {
            $(".list-tabs").css("width", width);  //使用JQ应用宽度
          });
        })
    } else {
      //==============拉取文章分类  做导航==============
      nAPI.categoryList()
        .then(function (data) {
          angular.forEach(data.list, function(value, key) {
            data.list[key].navigation_name=data.list[key].category_name;
            // console.log($state.current.name+'({catid:'+''+'})')
            data.list[key].navigation_link=$state.current.name+'({catid:'+data.list[key].category_id+'})';
          });
          console.log([1,data.list[1].navigation_link])
          arlist.navData = data.list;
          console.log(arlist.navData)
        });
    }


    //根据参数取文章数据
    var arList = {
      category_id: arlist.params.catid,
      keyword: arlist.params.keyword
    };

    nAPI.articleList(arList)
      .then(function (data) {
        // console.log(data.returnObj.list)
        arlist.listData = data.returnObj.list;
      });


    //搜索功能实现
    $scope.search = function () {
      var Url = $location.url(); //获取url的参数部分
      $location.search('keyword', arlist.keyword); //改变地址栏参数
    };

    //分类点击后改变分类ID
    $scope.changeCateID = function (data) {
      $location.search('catid',data); //改变地址栏参数
      $location.search('keyword', ''); //清空关键字
    };

  }
})();
