(function() {
  'use strict';
  angular
    .module('zhiyun')
    .controller('arListCtrl', arListCtrl)

  /** 列表页 */
  function arListCtrl($location,$scope,wPopup,wxAPI,nAPI,$q,$filter,wLoading,$stateParams,$http) {

    console.log($stateParams)

    var arlist=this;
    arlist.listData=[];//文章列表
    arlist.navData=[];//导航列表

    //有导航参数  调导航接口
    if($stateParams.navtype){
      arlist.navtype=$stateParams.navtype;
      $http({url:"http://dev1.gotocloud8.net/serv/api/mall/navigation.ashx?action=typelist&navigation_link_type=top"})
      .success(function(data){
        arlist.navData = [{
          children: null,
          navigation_id: 30,
          navigation_img_url: "",
          navigation_link: "10",
          navigation_name: "最新",
        }, {
          children: null,
          navigation_id: 30,
          navigation_img_url: "",
          navigation_link: "507",
          navigation_name: "最新",
        }, {
          children: null,
          navigation_id: 30,
          navigation_img_url: "",
          navigation_link: "20",
          navigation_name: "最新",
        }];
        console.log(data)
      })
    }


    //取文章数据
    var arList={
      category_id:$stateParams.catid
    }
    nAPI.articleList(arList)
    .then(function(data){
      console.log(data.returnObj.list)
      arlist.listData=data.returnObj.list;
    })

  }
})();
