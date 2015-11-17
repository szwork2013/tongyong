angular
  .module('zhiyun')
  .controller('detailCtrl', detailCtrl);

function detailCtrl($state,$stateParams, $scope,commService) {
  var pageData = $scope.pageData = {
    articleid:$stateParams.id
  };
  var pageFunc = $scope.pageFunc = {};

  pageFunc.getArticle = function () {
    commService.get(
      commService.baseData.url,
      {
        action: "getarticledetail",
        articleid: pageData.articleid
      }, function (data) {
        pageData.detail = data;
      }
    )
  };

  pageFunc.go = function (route) { //利用路由进行跳转
    $state.go(route);
  };

  pageFunc.getArticle();
}

