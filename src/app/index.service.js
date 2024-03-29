angular
  .module('zhiyun').factory("commService", function ($rootScope,$http) {


    if(location.hostname.match('localhost')||location.hostname.match('192.168.')){
      $rootScope.mainsiteurl="http://efchengdu.gotocloud8.net";
      // $rootScope.mainsiteurl="http://dizhou.gotocloud8.net/";
    }else{
      $rootScope.mainsiteurl=location.origin;
    }


    var commService = {
      baseData: {
        listUrl:$rootScope.mainsiteurl+"/serv/api/article/list.ashx", //文章列表接口
        listMenuUrl:$rootScope.mainsiteurl+"/serv/api/mall/navigation.ashx",  //导航菜单接口
        detailUrl:$rootScope.mainsiteurl+"/serv/api/article/get.ashx" //文章页接口
      }
    };

    //model参数组合
    commService.extend = function (reqData, option) {
      var keys = Object.keys(option);
      for (var i = 0; i < keys.length; i++) {
        if (option[keys[i]]) {
          reqData[keys[i]] = option[keys[i]];
        }
        else if (option[keys[i]] == "") {
          reqData[keys[i]] = option[keys[i]];
        }
      }
    };

    //get参数转换url
    commService.getParams = function (url, jsonData) {
      var result = url + '?';
      var i = 0;
      var keys = Object.keys(jsonData);
      for (var i = 0; i < keys.length; i++) {
        if (i != 0) {
          result += '&';
        }
        result += keys[i] + '=' + jsonData[keys[i]];
      }
      return result;
    };
    //Get 异步获取数据
    commService.get = function (url, option, callBack, failCallBack) {
      $http.get(commService.urlParams(url, option)).success(function (data) {
        callBack(data);
      }).error(function (data) {
        failCallBack(data);
      });
    };

    //post因angulajs http post有点小问题需要转换post的data
    commService.postParams = function (jsonData) {
      var result = "";
      var i = 0;
      var keys = Object.keys(jsonData);
      for (var i = 0; i < keys.length; i++) {
        if (i != 0) {
          result += "&";
        }
        result += keys[i] + '=' + jsonData[keys[i]];
      }
      return result;
    };
    commService.get = function (url, option, callBack, failCallBack) {
      $http({
        method: 'GET',
        url: url,
        params: option
      }).success(function (data) {
        callBack(data)
      }).error(function (data) {
        failCallBack(data)
      });
    };
    commService.post = function (url, option, callBack, failCallBack) {
      $http({
        method: 'POST',
        url: url,
        data: commService.postParams(option),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).success(function (data) {
        callBack(data)
      }).error(function (data) {
        failCallBack(data)
      });
    };

    commService.jsonp = function (url, option, callBack, failCallBack) {
      $http({
        method: 'jsonp',
        url: url,
        params: option
      }).success(function (data) {
        callBack(data)
      }).error(function (data) {
        failCallBack(data)
      });
    };
    return commService;
  });
