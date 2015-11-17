(function() {
  'use strict';

  angular
    .module('zhiyun')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
