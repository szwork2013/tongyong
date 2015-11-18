angular
  .module('zhiyun')
  .controller('detailCtrl', detailCtrl);

function detailCtrl($state,$stateParams, $scope,commService) {
  var pageData = $scope.pageData = {
    articleId:$stateParams.id,
    detail:{}
  };
  var pageFunc = $scope.pageFunc = {};

  pageFunc.getArticle = function () {
    commService.get(
      commService.baseData.detailUrl,
      {
        article_id: pageData.articleId
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

